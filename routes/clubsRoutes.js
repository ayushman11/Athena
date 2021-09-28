const express= require('express');
const clubsController= require('../controllers/clubsController');

const router= express.Router();

router.get('/clubs', clubsController.all_clubs);
router.get('/clubs/:id', clubsController.club_specific);

module.exports= router;