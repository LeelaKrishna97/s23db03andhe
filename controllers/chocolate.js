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
exports.chocolate_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Chocolate.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    
    
// Handle Costume update form on PUT.
exports.chocolate_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Chocolate.findById( req.params.id)
    // Do updates of properties
    if(req.body.chocolatetype)
    toUpdate.chocolatetype = req.body.chocolatetype;
    if(req.body.chocolatebrand) toUpdate.chocolatebrand = req.body.chocolatebrand;
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
// Handle a show one view with id specified by query
exports.chocolate_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Chocolate.findById( req.query.id)
    res.render('chocolatedetail',
    { title: 'Chocolate Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for creating a costume.
    // No body, no in path parameter, no query.
    // Does not need to be async
exports.chocolate_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('chocolatecreate', { title: 'Chocolate Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    