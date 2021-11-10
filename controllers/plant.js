const plant = require('../models/plant');
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
// for a specific Plant.
exports.plant_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Plant detail: ' + req.params.id);
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
        thePlants = await plant.find();
        res.render('plant', { title: 'Plant Search Results', results: thePlants });
    } catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle nameume delete form on DELETE.
exports.plant_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Plant delete DELETE ' + req.params.id);
};
// Handle nameume update form on PUT.
exports.plant_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Plant update PUT' + req.params.id);
};