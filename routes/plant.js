var express = require('express');
const plant_controller = require('../controllers/plant');
var router = express.Router();

/* GET costumes */
router.get('/detail', plant_controller.plant_view_one_Page);
module.exports = router;