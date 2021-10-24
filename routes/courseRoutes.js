const express= require('express');
const {requireAuth} = require('../middleware/authMiddleware');
const courseController= require('../controllers/courseController');

const router= express.Router();

router.get('/course/:course_id/:video_id', requireAuth, courseController.course_video);

router.post('/course/:course_id/:video_id', requireAuth, courseController.post_comment);

router.get('/all-courses', courseController.all_courses);

router.get('/course/:course_id', courseController.course_home);

router.get('/add-course', courseController.add_course);

module.exports= router;