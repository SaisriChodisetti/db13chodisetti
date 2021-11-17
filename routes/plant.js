var express = require('express');
const plant_controller = require('../controllers/plant');
var router = express.Router();

/* GET costumes */
router.get('/create', plant_controller.plant_create_Page);

module.exports = router;