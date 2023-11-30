var express = require('express');
const chocolate_controllers= require('../controllers/chocolate');
var router = express.Router();
/* GET costumes */
router.get('/', chocolate_controllers.chocolate_view_all_Page );
/* GET detail costume page */
router.get('/detail', chocolate_controllers.chocolate_view_one_Page);

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    //req.session.returnTo = req.originalUrl; 
    res.redirect("/login");
}

/* GET create costume page */
router.get('/create', secured,chocolate_controllers.chocolate_create_Page);
/* GET create update page */
router.get('/update', secured,chocolate_controllers.chocolate_update_Page);
/* GET delete costume page */
router.get('/delete', secured,chocolate_controllers.chocolate_delete_Page);


module.exports = router;
