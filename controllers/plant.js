var Plant = require('../models/plant');
//module.exports = mongoose.model("Plant", plantSchema)


// List of all Plants
exports.plant_list = function(req, res) {
res.send('NOT IMPLEMENTED: Plant list');
};
// for a specific Plant.
exports.plant_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Plant detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.plant_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Plant create POST');
};
// Handle Costume delete form on DELETE.
exports.plant_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Plant delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.plant_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Plant update PUT' + req.params.id);
};