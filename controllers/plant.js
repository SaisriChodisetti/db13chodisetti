const plants = require('../models/plant');
var Plant = require('../models/plant');
//module.exports = mongoose.model("Plant", plantSchema)
// List of all Plants
exports.plant_list = async function (req, res) {
    try {
        thePlants = await plants.find();
        res.send(thePlants);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle nameume create on POST.
exports.plant_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Plant();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"nameume_type":"goat", "name":12, "size":"large"}
    document.type = req.body.type;
    document.name = req.body.name;
    document.cost = req.body.cost;
    console.log(Plant);
    console.log(req.body);
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.plant_view_all_Page = async function(req, res) {
    try {
        thePlants = await plants.find();
        res.render('plant', { title: 'Plant Search Results', results: thePlants });
    } catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};

exports.plant_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await plants.findById(req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle nameume delete form on DELETE.
exports.plant_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await plants.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle nameume update form on PUT.
exports.plant_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await plants.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.name)  
               toUpdate.name = req.body.name; 
        if(req.body.type) toUpdate.type = req.body.type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
};

// Handle a show one view with id specified by query 
exports.plant_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await plants.findById( req.query.id)
    res.render('plantdetail',
   { title: 'Plant Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };