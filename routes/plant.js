var express = require('express');
const plant_controller = require('../controllers/plant');
var router = express.Router();

router.get('/delete', plant_controller.plant_delete_Page);

module.exports = router;