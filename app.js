const express = require('express');
const morgan = require('morgan');
const mongoose= require('mongoose');
const { result } = require('lodash');
const { findById } = require('./models/course');
const indexRoutes = require('./routes/indexRoutes');
const clubsRoutes = require('./routes/clubsRoutes');
const courseRoutes = require('./routes/courseRoutes');
const cookieParser = require('cookie-parser');


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


app.use(courseRoutes);
app.use(clubsRoutes);
app.use(indexRoutes);











