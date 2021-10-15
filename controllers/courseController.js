const Course= require('../models/course');
const Comment= require('../models/comment');

const course_video= async (req, res) => {
    const id= req.params.id;
    const course= await Course.findById(id)
    const comments= await Comment.find({course: id});

    res.render('video', {course, comments});  
}

const post_comment= async (req,res) => {
    const id= req.params.id;
    req.body.course= id;

    const comment= new Comment(req.body);

    comment.save()
     .then((result) => {
         res.redirect('back');
     })
     .catch((err) => {
         console.log(err);
     })
}

const all_courses= async (req, res) => {
    const courses= await Course.find();
    res.render('all-courses', {courses});
}

const course_home= async (req, res) => {
    const id= req.params.id;
    const course= await Course.findById(id)

    res.render('course-home', {course});
}

module.exports = {
    post_comment,
    course_video,
    all_courses,
    course_home
}