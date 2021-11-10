var express = require('express');
const plant_controlers = require('../controllers/plant');
var router = express.Router();

/* GET costumes */
router.get('/', plant_controlers.plant_view_all_Page);
module.exports = router;