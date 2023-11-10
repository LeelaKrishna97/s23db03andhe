var Chocolate = require('../models/chocolateSchema');
// List of all Costumes
exports.chocolate_list = async function(req, res) {
    try{
    thechocolate = await Chocolate.find();
    res.send(thechocolate);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific Costume.
exports.chocolate_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Chocolate.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    
// Handle Costume create on POST.
exports.chocolate_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Chocolate();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.chocolatetype = req.body.chocolatetype;
    document.chocolatebrand = req.body.chocolatebrand;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// Handle Costume delete form on DELETE.
exports.chocolate_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Chocolate delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.chocolate_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Chocolate update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.chocolate_view_all_Page = async function(req, res) {
try{
thechocolate = await Chocolate.find();
res.render('chocolate', { title: 'Chocolate Search Results', results: thechocolate });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};