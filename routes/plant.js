var express = require('express');
const plant_controlers = require('../controllers/plant');
var router = express.Router();

/* GET costumes */
router.delete('/plant/:id', plant_controlers.plant_delete);
module.exports = router;