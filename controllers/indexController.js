const Course= require('../models/course');

const index= (req, res) => {
    Course.find()
    .then((result) => {
        res.render('index', {courses: result});
    })
    .catch((err) => {
        console.log(err);
    });
}

const home_redirect= (req, res) => {
    res.redirect('/');
}

const error_404= (req, res) => {
    res.status(404).render('404');
}

module.exports= {
    index,
    home_redirect,
    error_404
}