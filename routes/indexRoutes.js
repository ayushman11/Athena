const express= require('express');
const indexController= require('../controllers/indexController');

const router= express.Router();

router.get('/', indexController.index);

router.get('/home', indexController.home_redirect);

router.get('/about-us', indexController.about_us);

router.use(indexController.error_404);

module.exports= router;