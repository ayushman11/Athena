const express= require('express');
const courseController= require('../controllers/courseController');

const router= express.Router();

router.get('/course/video/:id', courseController.course_video);

router.post('/course/:id', courseController.post_comment);

router.get('/all-courses', courseController.all_courses);

router.get('/course-home/:id', courseController.course_home);

module.exports= router;