var express = require('express');
const plant_controlers = require('../controllers/plant');
var router = express.Router();

/* GET costumes */
router.get('plant/:id', plant_controlers.plant_detail);
module.exports = router;