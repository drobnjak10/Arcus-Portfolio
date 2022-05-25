const express = require('express')

const db = require('../database.js')

const router = new express.Router()

router.get('/', async (req, res) => {
    let sql = 'SELECT * FROM landing';

    await db.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ projects: results })
    })
})

router.get('/:id', async (req, res) => {
    let sql = 'SELECT * FROM landing WHERE id = ?'

    await db.query(sql, req.params.id, (err, results) => {
        if (err) throw err;
        res.json({ project: results[0] })
    })
});

router.post('/add', async (req, res) => {
    let sql = 'INSERT INTO landing SET ?'

    await db.query(sql, req.body, (err, results) => {
        if (err) {
            res.json({ error: 'Insert valid data!' })
            return;
        }
        res.json({ message: 'Project added successfully', results })
    })
})

router.put('/edit/:id', async (req, res) => {
    const update = [req.body, req.params.id]
    
    let sql = "UPDATE landing SET ? WHERE id = ?";

    await db.query(sql, update, (err, results) => {
        if (err) throw err
        res.json({ message: 'Project updated!', results })
    })
    
})

router.delete('/delete/:id', async (req, res) => {
    
    let sql = "DELETE FROM landing WHERE id = ?";

    await db.query(sql, req.params.id, (err, results) => {
        if (err) throw err
        res.json({ message: 'Project updated!', results })
    })
})


module.exports = router