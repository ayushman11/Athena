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
        title: 'Express JS',
        authors: [{name: 'Nikhil Mandhani', position: 'Web Nominee'}, {name: 'Ayushman Choudhary', position: 'Web Convener'}, {name: 'Ayush Jain', position: 'Web Convener'}, {name: 'Aaditya Salukhe', position: 'Web Convener'}],
        short_description: 'Nullam elementum felis lectus, eu pellentesque nisi viverra vel. Sed a dignissim enim. Vivamus at turpis dolor.',
        playlist: [
            {title: 'Tutorial and Setup', link: 'https://www.youtube.com/embed/zb3Qk8SG5Ms', description: "This is a short description"}, 
            {title: 'Node JS Basics', link: 'https://www.youtube.com/embed/OIBIXYLJjsI&', description: "This is a short description2"},
            {title: 'Clients and Server', link: 'https://www.youtube.com/embed/HPZ1leCV8k', description: "This is a short description2"},
            {title: 'Requests and Response', link: 'https://www.youtube.com/DQD00NAUPNk', description: "This is a short description2"}],
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