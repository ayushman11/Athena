const express = require('express');
const morgan = require('morgan');
const mongoose= require('mongoose');
const { result } = require('lodash');
const { findById } = require('./models/course');
const indexRoutes = require('./routes/indexRoutes');
const clubsRoutes = require('./routes/clubsRoutes');
const courseRoutes = require('./routes/courseRoutes');
const authRoutes = require('./routes/authRoutes');


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


app.use(courseRoutes);
app.use(clubsRoutes);
app.use(authRoutes);
app.use(indexRoutes);




// app.get('/add-club', (req, res) => {
//     const club= new Club({
//         name: 'Insync',
//         council: 'James Bond',
//         description: 'Nullam elementum felis lectus, eu pellentesque nisi viverra vel. Sed a dignissim enim. Vivamus at turpis dolor.'
//     });

//     club.save()
//      .then((result) =>{
//          res.send(result)
//      })
//      .catch((err)=>{
//          console.log(err);
//      });
// })
// app.get('/show-course', (req, res) => {
//     Course.find()
//      .then((result) =>{
//          res.send(result)
//      })
//      .catch((err)=>{
//          console.log(err);
//      });
// })









