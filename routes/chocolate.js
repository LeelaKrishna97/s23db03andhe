var express = require('express');
const chocolate_controllers= require('../controllers/chocolate');
var router = express.Router();
/* GET costumes */
router.get('/', chocolate_controllers.chocolate_view_all_Page );
/* GET detail costume page */
router.get('/detail', chocolate_controllers.chocolate_view_one_Page);
/* GET create costume page */
router.get('/create', chocolate_controllers.chocolate_create_Page);
/* GET create update page */
router.get('/update', chocolate_controllers.chocolate_update_Page);
/* GET delete costume page */
router.get('/delete', chocolate_controllers.chocolate_delete_Page);


module.exports = router;
