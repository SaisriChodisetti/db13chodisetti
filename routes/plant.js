var express = require('express');
const plant_controlers = require('../controllers/plant');
var router = express.Router();

/* GET costumes */
router.put('plant/:id', plant_controlers.plant_update_put);
module.exports = router;