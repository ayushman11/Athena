const express = require('express');
const morgan = require('morgan');
const mongoose= require('mongoose');
const Course= require('./models/course');
const Club= require('./models/club')
const { result } = require('lodash');

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
app.use(express.static(__dirname));

// listen for requests

app.get('/add-club', (req, res) => {
    const club= new Club({
        name: 'Design',
        council: 'Moyesha',
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

app.get('/', (req, res) => {
    // res.send('<h1> Hello World</h1>');
    Course.find()
     .then((result) => {
        res.render('index', {courses: result});
     })
     .catch((err) => {
         console.log(err);
     });
})
app.get('/clubs', (req, res) => {
    // res.send('<h1> Hello World</h1>');
    Club.find()
     .then((result) => {
        res.render('clubs', {clubs: result});
     })
     .catch((err) => {
         console.log(err);
     });
})
app.get('/course', (req, res) => {
    // res.send('<h1> Hello World</h1>');
    res.render('course');
})
app.get('/home', (req, res) => {
    // res.send('<h1> Hello World</h1>');
    res.redirect('/');
})
app.get('/login', (req, res) => {
    // res.send('<h1> Hello World</h1>');
    res.render('login');
})
app.get('/register', (req, res) => {
    // res.send('<h1> Hello World</h1>');
    res.render('register');
})
app.get('/all-courses', (req, res) => {
    // res.send('<h1> Hello World</h1>');
    res.render('all-courses');
})
app.get('/club-specific', (req, res) => {
    // res.send('<h1> Hello World</h1>');
    res.render('club-specific');
})
app.use((req, res) => {
    // res.send('<h1> Hello World</h1>');
    res.status(404).render('404');
})