var Chocolate = require('../models/chocolateSchema');
// List of all Costumes
exports.chocolate_list = function(req, res) {
res.send('NOT IMPLEMENTED: Chocolate list');
};
// for a specific Costume.
exports.chocolate_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Chocolate detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.chocolate_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Chocolate create POST');
};
// Handle Costume delete form on DELETE.
exports.chocolate_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Chocolate delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.chocolate_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Chocolate update PUT' + req.params.id);
};