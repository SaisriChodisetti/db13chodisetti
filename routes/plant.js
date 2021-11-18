var express = require('express');
const plant_controller = require('../controllers/plant');
var router = express.Router();

/* GET costumes */
router.get('/update', plant_controller.plant_update_Page);

module.exports = router;