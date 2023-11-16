var express = require('express');
const chocolate_controllers= require('../controllers/chocolate');
var router = express.Router();
/* GET costumes */
router.get('/', chocolate_controllers.chocolate_view_all_Page );
/* GET detail costume page */
router.get('/detail', chocolate_controllers.chocolate_view_one_Page);
/* GET create costume page */
router.get('/create', chocolate_controlers.chocolate_create_Page);
module.exports = router;
