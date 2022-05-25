const express = require('express')

const db = require('../database.js')

const router = new express.Router()

const multer  = require('multer')

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../front/public/images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    }
})

const upload = multer({ storage: fileStorageEngine })

router.get('/', async (req, res) => {
    let sql = 'SELECT * FROM gallery';

    await db.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ projects: results })
    })
})

router.get('/:id', async (req, res) => {
    let sql = 'SELECT * FROM gallery WHERE id = ?'

    await db.query(sql, req.params.id, (err, results) => {
        if (err) throw err;
        res.json({ project: results[0] })
    })
});


// ADD PHOTO

router.post('/add', upload.single('image'), async (req, res) => {
    let sql = 'INSERT INTO gallery SET ?'

    const image_path = new Date().getTime() + '-' + req.file.originalname

    await db.query(sql, {image_path}, (err, results) => {
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
    
    let sql = "UPDATE gallery SET ? WHERE id = ?";

    await db.query(sql, update, (err, results) => {
        if (err) throw err
        res.json({ message: 'Image updated!', results })
    })
    
})

router.delete('/delete/:id', async (req, res) => {
    
    let sql = "DELETE FROM gallery WHERE id = ?";

    await db.query(sql, req.params.id, (err, results) => {
        if (err) throw err
        res.json({ message: 'Image updated!', results })
    })
})


module.exports = router