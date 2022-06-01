const express = require("express");

const db = require("../database.js");
const bcrypt = require("bcryptjs");
const {
  getJwtToken,
  verifyTokenAndAuthorization,
  verifyToken,
} = require("../helpers/helpers.js");

const router = new express.Router();

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  db.query(
    "INSERT INTO user SET ?",
    { email, password: hashedPassword },
    (err, results) => {
      if (err) {
        res.json({ error: err.message });
        return;
      }

      res.json({ message: "Registered.", user: results });
    }
  );
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.json({ error: "Wrong credentials!" });
    return;
  }

  db.query("SELECT * FROM user WHERE email = ?", email, (err, results) => {
    if (err) {
      res.json({ error: "Something goes wrong." });
      return;
    }

    const user = results[0];

    if (!user) {
      res.json({ error: "Wrong email address!" });
      return
    }

    const isMatched = password
      ? bcrypt.compareSync(password, user.password)
      : null;

    if (!isMatched) {
      res.json({ error: "Wrong password!" });
      return;
    }

    const token = getJwtToken(user);

    res.json({
      id: user.id,
      email: user.email,
      token,
      message: "Logged in successfully.",
    });
  });
});

router.get("/checkVerify", verifyToken, (req, res) => {
  if(!req.user || !req.user.email) {
    res.json({error: 'You are not authenticated.'});
    return
  }
  db.query(
    "SELECT * FROM user WHERE email = ?",
    req.user.email,
    (err, results) => {
      if (err) {
        res.json({ err: err.message });
        return;
      }
      res.json({ user: results[0] });
    }
  );
});

module.exports = router;
