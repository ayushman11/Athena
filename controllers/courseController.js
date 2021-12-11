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
        title: 'Fundamentals of Music Theory',
        cover: 'https://drive.google.com/uc?id=15Lrz2hP3KDOx8KU4RzD7305-Q2rQW57w',
        authors: [{name: 'The Raag Hub', position: 'Instructor'}],
        short_description: 'Learn all about the fundamentals of music theory taught on keyboard',
        playlist: [
            {description: 'Week 1 Segment 1', link: 'https://youtube.com/embed/XYomBKQR3sI', title: "Notes", thumbnail: "https://drive.google.com/uc?id=1vpGEQlN1R2qX4pVV9XgtklG8q6lfxbMU"}, 
            {description: 'Week 1 Segment 2', link: 'https://youtube.com/embed/Y-aTiUrT_Hk', title: "Intervals", thumbnail: "https://drive.google.com/uc?id=1OByTL5cwHkwvEORx344hRWyiTYQ9-BXn"}, 
            {description: 'Week 1 Segment 3', link: 'https://youtube.com/embed/nggXa3PGBlE', title: "Consonance & Dissonance", thumbnail: "https://drive.google.com/uc?id=1K3kQphjmkZ6UXH6JEHGIhPf2W_AsLxIH"}, 
            {description: 'Week 2 Segment 1', link: 'https://youtube.com/embed/6ZN_aSePsQU', title: "Major Scale", thumbnail: "https://drive.google.com/uc?id=16yPHaFVkDdERyEryhnLpCq-GRMemB28P"}, 
            {description: 'Week 2 Segment 2', link: 'https://youtube.com/embed/1luE7W3n_uA', title: "Minor Scale", thumbnail: "https://drive.google.com/uc?id=1pU6oL4Gi-kN5ub-gXxmeqUCaB8YTqxaM"}, 
            {description: 'Week 2 Segment 3', link: 'https://youtube.com/embed/KUpKW775k0s', title: "Circle of Fifths", thumbnail: "https://drive.google.com/uc?id=1swaTJSGiadpIsI3YIKZ7tJstal-OJUH1"}, 
            {description: 'Week 2 Segment 4', link: 'https://youtube.com/embed/pUrUT77-c1M', title: "Tonal Stability", thumbnail: "https://drive.google.com/uc?id=1_MAvi3FI8lV6M5D_KeXY4DDvBn2kbhKZ"}, 
            {description: 'Week 3 Segment 1', link: 'https://youtube.com/embed/31IW7yJ-UyM', title: "Chord & Key", thumbnail: "https://drive.google.com/uc?id=1lt7KpfWL8QxGrYV4i9HguuDyKrU5OP8e"}, 
            {description: 'Week 3 Segment 2', link: 'https://youtube.com/embed/XHsTs7DRZlA', title: "Diatonic Scales & Chords", thumbnail: "https://drive.google.com/uc?id=1lT6zKwPso0J4etkcTpeRZ6KFi8giT39v"}, 
            {description: 'Week 3 Segment 3', link: 'https://youtube.com/embed/MEbzhGnZvn8', title: "Chord Progression", thumbnail: "https://drive.google.com/uc?id=1c-vkQSrZSp1yugMoDWLSdFj9fD_CQBU0"}, 
            {description: 'Week 3 Segment 4', link: 'https://youtube.com/embed/FqhrcDmokmg', title: "Chord Stability", thumbnail: "https://drive.google.com/uc?id=1S6nWrfSkJ4Gb1PTrREWYBjPcETGGK2KU"}, 
            {description: 'Week 4 Segment 1', link: 'https://youtube.com/embed/dEtbSNsSI6U', title: "Harmonic Functions", thumbnail: "https://drive.google.com/uc?id=1LdHC7p_ldMm3KSFd0kxsBNcLn55boYyi"}, 
            {description: 'Week 4 Segment 2', link: 'https://youtube.com/embed/AF7xeXDX1NE', title: "Cadences", thumbnail: "https://drive.google.com/uc?id=1KEKRCLP42j-EhKF3C-FxltqoZN32dNj4"}, 
            {description: 'Week 4 Segment 3', link: 'https://youtube.com/embed/YG8i1vqxGpE', title: "Harmonic & Melodic Minor Scales", thumbnail: "https://drive.google.com/uc?id=1K5EkipxuWsviXpuMzvDiYWWJuiG9Hqyr"}, 
            {description: 'Week 4 Segment 4', link: 'https://youtube.com/embed/De_ZpLKnzyM', title: "Bars & Time Signatures", thumbnail: "https://drive.google.com/uc?id=1wzwUcNW8j_DCEo47B4akGIcdbzgoW2d4"}, 
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