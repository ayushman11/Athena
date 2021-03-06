const express = require('express');
const morgan = require('morgan');
const mongoose= require('mongoose');
const { result } = require('lodash');
const { findById } = require('./models/course');
const indexRoutes = require('./routes/indexRoutes');
const clubsRoutes = require('./routes/clubsRoutes');
const courseRoutes = require('./routes/courseRoutes');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { checkUser } = require('./middleware/authMiddleware');


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
app.use(express.json());
app.use(cookieParser());

// listen for requests

// cookies

// app.get('/set-cookies', (req,res) => {

//     //res.setHeader('Set-Cookie', 'newUser=true');
//     res.cookie('newUser', false);
//     res.cookie('isEmployee', true, {maxAge: 1000*60*60*24, httpOnly: true});

//     res.send('you got the cookies!');
// })

// app.get('read-cookies', (req,res) => {
    
//     const cookies = req.cookies;
//     console.log(cookies);

//     res.json(cookies);
// })

app.get("*", checkUser);

app.use(courseRoutes);
app.use(clubsRoutes);
app.use(authRoutes);
app.use(indexRoutes);






// app.get('/show-course', (req, res) => {
//     Course.find()
//      .then((result) =>{
//          res.send(result)
//      })
//      .catch((err)=>{
//          console.log(err);
//      });
// })









