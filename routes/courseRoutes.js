const express= require('express');
const courseController= require('../controllers/courseController');

const router= express.Router();

router.get('/course/:id', courseController.course_index);

router.post('/course/:id', courseController.post_comment);

router.get('/all-courses', courseController.all_courses);

module.exports= router;