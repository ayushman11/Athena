const Course= require('../models/course');
const Comment= require('../models/comment');

const course_video= async (req, res) => {
    const course_id= req.params.course_id;
    const video_id= req.params.video_id;
    let course = await Course.findById(course_id);
    const comments= await Comment.find({"course": course_id});
    course= course.toJSON();
    const playlist= course.playlist;
    let video=0;
    for (let j=0; j<playlist.length; j++) {
        if(playlist[j]._id.toString() === video_id) {
            video= playlist[j];
            break;
        }
    };
    res.render('video', {course, video, comments});
}

const post_comment= async (req,res) => {
    const video_id= req.params.video_id;
    req.body.video_id= video_id;

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
    const course_id= req.params.course_id;
    const course= await Course.findById(course_id)

    res.render('course-home', {course});
}

const add_course = async (req,res) => {

    const course= new Course({
        title: 'Python',
        author: 'FreeCodeCamp',
        short_description: 'Nullam elementum felis lectus, eu pellentesque nisi viverra vel. Sed a dignissim enim. Vivamus at turpis dolor.',
        playlist: [{title: 'Video 1', link: 'udemy.com', description: "This is a short description"}, {title: 'Video 2', link: 'codeforces.com', description: "This is a short description2"}],
    });
    
    course.save()
     .then((result) =>{
         res.send(result)
     })
     .catch((err)=>{
         console.log(err);
     });
}

module.exports = {
    post_comment,
    course_video,
    all_courses,
    course_home,
    add_course
}