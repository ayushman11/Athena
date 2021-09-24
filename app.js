const express = require('express');
const morgan = require('morgan');
const mongoose= require('mongoose');
const Course= require('./models/course');
const Club= require('./models/club')
const Comment= require('./models/comment')
const { result } = require('lodash');
const { findById } = require('./models/course');


// express app
const app = express();

// connect to mongoDB
const dbURI='mongodb+srv://athenaiitb:jishnugsca@cluster0.jcgsl.mongodb.net/Athena?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
 .then((result) => app.listen(3000))
 .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname));

// listen for requests

app.get('/add-club', (req, res) => {
    const club= new Club({
        name: 'Insync',
        council: 'James Bond',
        description: 'Nullam elementum felis lectus, eu pellentesque nisi viverra vel. Sed a dignissim enim. Vivamus at turpis dolor.'
    });

    club.save()
     .then((result) =>{
         res.send(result)
     })
     .catch((err)=>{
         console.log(err);
     });
})
app.get('/show-course', (req, res) => {
    Course.find()
     .then((result) =>{
         res.send(result)
     })
     .catch((err)=>{
         console.log(err);
     });
})

app.post('/comment', (req,res) => {
    const comment= new Comment(req.body);

    comment.save()
     .then((result) => {
         res.redirect('/course');
     })
     .catch((err) => {
         console.log(err);
     })
})

app.get('/', (req, res) => {
    Course.find()
     .then((result) => {
        res.render('index', {courses: result});
     })
     .catch((err) => {
         console.log(err);
     });
})
app.get('/clubs', (req, res) => {
    Club.find()
     .then((result) => {
        res.render('clubs', {clubs: result});
     })
     .catch((err) => {
         console.log(err);
     });
})
app.get('/course/:id', async (req, res) => {
    const id= req.params.id;
    const course= await Course.findById(id)
    const comments= await Comment.find()

    res.render('course', {course, comments});
    
})
app.get('/home', (req, res) => {
    res.redirect('/');
})
app.get('/login', (req, res) => {
    res.render('login');
})
app.get('/register', (req, res) => {
    res.render('register');
})
app.get('/all-courses', async (req, res) => {
    const courses= await Course.find();
    res.render('all-courses', {courses});
})
app.get('/clubs/:id', async (req, res) => {
    const id= req.params.id;
    const club= await Club.findById(id)
    const courses= await Course.find();

    res.render('club-specific', {club, courses})

})
app.use((req, res) => {
    res.status(404).render('404');
})