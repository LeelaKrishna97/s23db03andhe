var express = require('express');
const chocolate_controllers= require('../controllers/chocolate');
var router = express.Router();
/* GET costumes */
router.get('/', chocolate_controllers.chocolate_view_all_Page );
module.exports = router;
