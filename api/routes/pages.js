const express = require('express')

const db = require('../database.js')

const router = new express.Router()

const multer = require('multer');

const time = Date.now();

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../front/public/pages')
    },
    filename: (req, file, cb) => {
        cb(null, time + '--' + file.originalname)
    }
})

const upload = multer({ storage: fileStorageEngine })

router.get('/', async (req, res) => {
    let sql = 'SELECT * FROM pages';

    await db.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ pages: results })
    })
})

router.get('/:id', async (req, res) => {
    let sql = 'SELECT * FROM pages WHERE id = ?'

    await db.query(sql, req.params.id, (err, results) => {
        if (err) throw err;
        res.json({ pages: results[0] })
    })
});


// ADD PHOTO

router.post('/add', upload.single('image'), async (req, res) => {
    let sql = 'INSERT INTO pages SET ?'

    const params = [{ ...req.body, image_path: req.file.filename }]

    await db.query(sql, params, (err, results) => {
        if (err) {
            res.json({ error: 'Insert valid data!' })
            return;
        }
        res.json({ message: 'Page added successfully', results })
    })
})

// router.put('/edit/:id', async (req, res) => {
//     const update = [req.body, req.params.id]

//     let sql = "UPDATE pages SET ? WHERE id = ?";

//     await db.query(sql, update, (err, results) => {
//         if (err) throw err
//         res.json({ message: 'Image updated!', results })
//     })

// })

router.delete('/delete/:id', async (req, res) => {

    let sql = "DELETE FROM pages WHERE id = ?";

    await db.query(sql, req.params.id, (err, results) => {
        if (err) throw err
        res.json({ message: 'Deleted!', results })
    })
})


module.exports = router