const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// set static files directory
app.use(express.static(__dirname));

// listen for requests
app.listen(3000);
app.get('/', (req, res) => {
    // res.send('<h1> Hello World</h1>');
    res.render('index');
})
app.get('/clubs', (req, res) => {
    // res.send('<h1> Hello World</h1>');
    res.render('clubs');
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