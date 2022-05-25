const express = require('express')
const db = require('../database.js')
const router = new express.Router();
const multer = require('multer');

const path = require('path')
const fs = require('fs')

const time = Date.now();

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../front/public/projects')
    },
    filename: (req, file, cb) => {
        cb(null, time + '--' + file.originalname)
    }
})

const upload = multer({ storage: fileStorageEngine })

router.get('/', async (req, res) => {
    let sql = 'SELECT * FROM projects';

    await db.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ projects: results })
    })
})

router.get('/:id', (req, res) => {
    let sql = 'SELECT * FROM projects WHERE id = ?'

    db.query(sql, req.params.id, (err, results) => {
        if (err) throw err;
        res.json({ project: results[0] })
    })
});

router.post('/add', upload.single('image'), async (req, res) => {
    let sql = 'INSERT INTO projects SET ?'

    const project = {}

    const params = [{ ...req.body, image_path: req.file.filename }]

    console.log(params)

    await db.query(sql, params, (err, results) => {
        if (err) {
            res.json({ error: 'Insert valid data!' })
            return;
        }
        res.json({ message: 'Project added successfully', results })
    })
})

router.post('/:id/upload', upload.single('image'), async (req, res) => {
    db.query("SELECT * from projects where id = ?", req.params.id, function (err, results) {
        if (err) {
            // You must `return` in this branch to avoid using callback twice.
            console.log(err)
            res.json({ error: err })
        }

        const image_path = results[0].image_path

        const pathFolder = path.join(__dirname, `../../front/public/projects/${image_path}`)
        if(image_path) {
            fs.unlinkSync(pathFolder)
        }
    });

    let sql = 'UPDATE projects SET ? WHERE id = ?'

    const update = [{ image_path: req.file.filename }, req.params.id]
    
    db.query(sql, update, (err, results) => {
        if (err) {
            res.json({ error: 'Insert valid data!' })
            console.log(err)
            return;
        }
        res.json({ message: 'Image added successfully', results })
    })
})




router.put('/edit/:id', async (req, res) => {
    const update = [req.body, req.params.id]

    let sql = "UPDATE projects SET ? WHERE id = ?";

    await db.query(sql, update, (err, results) => {
        if (err) throw err
        res.json({ message: 'Project updated!', results })
    })

})

router.delete('/delete/:id', async (req, res) => {

    let sql = "DELETE FROM projects WHERE id = ?";

    await db.query(sql, req.params.id, (err, results) => {
        if (err) throw err
        res.json({ message: 'Project updated!', results })
    })
})


module.exports = router