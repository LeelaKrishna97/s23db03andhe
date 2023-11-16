var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var chocolate_controller = require('../controllers/chocolate');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/chocolate', chocolate_controller.chocolate_create_post);
// DELETE request to delete Costume.
router.delete('/chocolate/:id', chocolate_controller.chocolate_delete);
// PUT request to update Costume.
router.put('/chocolate/:id', chocolate_controller.chocolate_update_put);
// GET request for one Costume.
router.get('/chocolate/:id', chocolate_controller.chocolate_detail);
// GET request for list of all Costume items.
router.get('/chocolate', chocolate_controller.chocolate_list);
module.exports = router;
