
var express = require('express')
var router = express.Router()

// Require controller modules
var pika_controller = require('../controllers/PikaController')

// Get the pika home page
router.get('/', pika_controller.index)

module.exports = router;
