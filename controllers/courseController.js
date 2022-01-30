const Course= require('../models/course');
const Comment= require('../models/comment');

const course_video= async (req, res) => {
    const course_id= req.params.course_id;
    const video_id= req.params.video_id;
    let course = await Course.findById(course_id);
    const comments= await Comment.find({"video_id": video_id});
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
        title: 'Pixels Workshop 2021-22',
        cover: '/assets/images/Pixels/wallpaper.jpg',
        authors: [{name: 'Pixels', position: ''}],
        short_description: 'Welcome to Pixels Orientation Workshops showcasing several digital arts',
        playlist: [
            {description: '', link: 'https://drive.google.com/file/d/15H_E_OFmGRekzrJEVxJ1YYhb0yIQ6ULv/preview', title: "Virtual Photoshoot Workshop", thumbnail: "/assets/images/Pixels/vpw.jpg"}, 
            {description: '', link: 'https://drive.google.com/file/d/1Lgk6nhsEpsy6i-4Tcc_1clKzSDJa9VJw/preview', title: "Talk Hour", thumbnail: "/assets/images/Pixels/th.jpg"}, 
            {description: '', link: 'https://drive.google.com/file/d/1SHh_Id3WJcDe-A1kFRZro-cz2AcsUeA_/preview', title: "Mobile Photography Workshop", thumbnail: "/assets/images/Pixels/mpw.jpg"}, 
            {description: '', link: 'https://drive.google.com/file/d/1qhZyeP7A9EgPm3NrXvYcNoSAhqI6tN6n/preview', title: "Light Painting Workshop", thumbnail: "/assets/images/Pixels/lpw.jpg"}, 
        ]});
    
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