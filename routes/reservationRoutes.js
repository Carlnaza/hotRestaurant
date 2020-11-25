const router = require("express").Router()
const { tables } = require('../db')

router.get('/tables', (req, res) => {
    res.json(tables)
})

router.post('/tables', (req, res) => {
    let reservation = {
        name: req.body.name,
        user_id: req.body.id_num,
        email: req.body.email,
        mobile: req.body.phone
    }
    tables.push(reservation)
    res.sendStatus(200)
})

module.exports = router