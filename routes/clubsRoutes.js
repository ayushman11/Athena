const express= require('express');
const clubsController= require('../controllers/clubsController');

const router= express.Router();

router.get('/all-clubs', clubsController.all_clubs);
router.get('/clubs/:id', clubsController.club_specific);

router.get('/add-club', clubsController.add_club);

module.exports= router;