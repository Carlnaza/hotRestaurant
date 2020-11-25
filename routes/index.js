const router = require("express").Router()

router.use("/api", require('./reservationRoutes.js'))

module.exports = router