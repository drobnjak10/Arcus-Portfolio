const express = require("express");
const db = require("../database.js");
const router = new express.Router();
const multer = require("multer");

const path = require("path");
const fs = require("fs");

const time = Date.now();

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../front/public/projects");
  },
  filename: (req, file, cb) => {
    cb(null, time + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

router.get("/", async (req, res) => {
  let sql = "SELECT * FROM projects";

  await db.query(sql, (err, results) => {
    if (err) throw err;
    res.json({ projects: results });
  });
});

router.get("/:id", (req, res) => {
  let sql = "SELECT * FROM projects WHERE id = ?";

  db.query(sql, req.params.id, (err, results) => {
    if (err) throw err;
    res.json({ project: results[0] });
  });
});

router.post("/add", upload.array("files", 3), async (req, res) => {
  let sql = "INSERT INTO projects SET ?";

  const fileNames = [];

  for (let file of req.files) {
    fileNames.push(file.filename);
  }

  const params = [{ ...req.body, image_path: fileNames.join("#") }];

  db.query(sql, params, (err, results) => {
    if (err) {
      res.json({ error: "Insert valid data!" });
      return;
    }
    res.json({ message: "Project added successfully", results });
  });
});

router.put("/edit/:id", upload.array("files", 3), (req, res) => {
  const update = [req.body, req.params.id];
  const { title, description, short_description, category } = req.body;

  let sql = "UPDATE projects SET ? WHERE id = ?";
  if (!req.files) {
    db.query(sql, update, (err, results) => {
      if (err) throw err;
      res.json({ message: "Project updated!", results });
    });
  } else {
    db.query(
      "SELECT * FROM projects WHERE id = ?",
      req.params.id,
      (err, results) => {
        if (err) throw err;
        const image_path = results[0]?.image_path;

        if (image_path) {
          const images = image_path.split("#");

          for (let image of images) {
            let pathFolder = path.join(
              __dirname,
              `../../front/public/projects/${image}`
            );
            fs.unlink(pathFolder, (err) => {
              if (err) res.json({ error: `Could not found image ${image}` });
            });
          }
        }
      }
    );

    const fileNames = [];

    for (let file of req.files) {
      fileNames.push(file.filename);
    }

    const obj = {
      title,
      description,
      short_description,
      category,
      image_path: fileNames.join("#"),
    };
    const params = [obj, req.params.id];
    db.query(sql, params, (err, results) => {
      if (err) throw err;
      res.json({ message: "Project updated!", results });
    });
  }
});

router.delete("/delete/:id", (req, res) => {
  let sql = "DELETE FROM projects WHERE id = ?";

  db.query(
    "SELECT * FROM projects WHERE id = ?",
    req.params.id,
    (err, results) => {
      if (err) throw err;
      const image_path = results[0]?.image_path;
      console.log(image_path)

      if (image_path) {
        const images = image_path.split("#");

        for (let image of images) {
          let pathFolder = path.join(
            __dirname,
            `../../front/public/projects/${image}`
          );
          fs.unlink(pathFolder, (err) => {
            if (err) {
              res.json({ error: `Could not found image ${image}` });
              return;
            }
          });
        }
      }
    }
  );

  db.query(sql, req.params.id, (err, results) => {
    if (err) throw err;
    res.json({ message: "Project updated!", results });
  });
});

module.exports = router;
