var express = require('express');
var router = express.Router();

// Require controller modules
var api_controller = require('../controllers/api');
var plant_controller = require('../controllers/plant');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// plant ROUTES ///
// POST request for creating a plant.
router.post('/plant', plant_controller.plant_create_post);
// DELETE request to delete plant.
router.delete('/plant/:id', plant_controller.plant_delete);
// PUT request to update plant.
router.put('/plant/:id', plant_controller.plant_update_put);
// GET request for one plant.
router.get('/plant/:id', plant_controller.plant_detail);
// GET request for list of all plant items.
router.get('/plant', plant_controller.plant_list);
/* GET detail plant page */

/* GET detail plant page */ 
router.get('/detail', plant_controller.plant_view_one_Page); 

router.get('/create', plant_controller.plant_create_Page);

router.get('/update', plant_controller.plant_update_Page);

router.get('/delete', plant_controller.plant_delete_Page);

module.exports = router;