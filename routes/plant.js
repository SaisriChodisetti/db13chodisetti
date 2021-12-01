var express = require('express');
const plant_controller = require('../controllers/plant');
var router = express.Router();

// router.get('/delete', plant_controller.plant_delete_Page);
router.get('/', plant_controller.plant_view_all_Page);

const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  }
router.get('/update', secured, plant_controller.plant_update_Page);

module.exports = router;