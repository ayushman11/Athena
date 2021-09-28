const express= require('express');
const indexController= require('../controllers/indexController');

const router= express.Router();

router.get('/', indexController.index);

router.get('/home', indexController.home_redirect);

router.use(indexController.error_404);

module.exports= router;