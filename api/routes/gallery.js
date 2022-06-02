const express = require("express");

const db = require("../database.js");
const multer = require("multer");

const path = require("path");
const fs = require("fs");

const router = new express.Router();

const time = Date.now();

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../front/public/gallery");
  },
  filename: (req, file, cb) => {
    cb(null, time + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

router.get("/", async (req, res) => {
  let sql = "SELECT * FROM gallery";

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json({ images: results });
  });
});

router.get("/:id", (req, res) => {
  let sql = "SELECT * FROM gallery WHERE id = ?";

  db.query(sql, req.params.id, (err, results) => {
    if (err) throw err;
    res.json({ project: results[0] });
  });
});

// ADD PHOTO

router.post("/add", upload.array("files", 12), async (req, res) => {
  let sql = "INSERT INTO gallery SET ?";

  db.query("SELECT * FROM gallery", (err, results) => {
    if (err) {
        res.status(200).json({status_code: 0, error: error.message });
      return;
    }

    if (results.length >= 12) {
        res.status(200).json({
        status_code: 0,
        error:
          "Max photos in gallery is 12. Please delete photo and insert new.",
      });
      return;
    }

    if (req.files.length > 12) {
      return  res.status(200).json({
        status_code: 0,
        error:
          "Max photos in gallery is 12. Please delete photo and insert new.",
      });
    }
    if (req.files && req.files.length + results.length > 12) {
        res.status(200).json({
        status_code: 0,
        error: `Max photos in gallery is 12. Current gallery size is ${
          results.length
        }. You are avaliable to upload ${12 - results.length} images.`,
      });
      return;
    }

    if (!req.files || !req.files.length) {
      return  res.status(200).json({ error: "ERROR", status_code: 0 });
    }

    for (let file of req.files) {
      if (!file) {
        return  res.status(200).json({ error: "ERROR" });
      }
      db.query(sql, { image_path: file.filename }, (err, results) => {
        if (err) {
          res.json({ error: "Insert valid data!",  status_code: 0 });
          console.log(error)
          return;
        }
        res.status(200).json({ message: "Image added successfully", results,  status_code: 1 });
        return;
      });
    }
  });
});

router.put("/edit/:id", async (req, res) => {
  const update = [req.body, req.params.id];

  let sql = "UPDATE gallery SET ? WHERE id = ?";

  await db.query(sql, update, (err, results) => {
    if (err) throw err;
    res.json({ message: "Image updated!", results });
  });
});

router.delete("/delete/:id", async (req, res) => {
  let sql = "DELETE FROM gallery WHERE id = ?";

  db.query(
    "SELECT * FROM gallery WHERE id = ?",
    req.params.id,
    (err, results) => {
      if (err) throw err;
      const image_path = results[0]?.image_path;

      if (image_path) {
        let pathFolder = path.join(
          __dirname,
          `../../front/public/gallery/${image_path}`
        );
        fs.unlink(pathFolder, (err) => {
          if (err) {
            res.json({ error: `Could not found image ${image_path}` });
          }
        });
      }
    }
  );

  db.query(sql, req.params.id, (err, results) => {
    if (err) throw err;
    res.json({ message: "Image deleted!", results });
  });
});

module.exports = router;
