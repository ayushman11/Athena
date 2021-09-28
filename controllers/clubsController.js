const Course= require('../models/course');
const Club= require('../models/club')

const all_clubs = async (req,res) => {
    Club.find()
     .then((result) => {
        res.render('clubs', {clubs: result});
     })
     .catch((err) => {
         console.log(err);
     });
}

const club_specific = async (req,res) => {
    const id= req.params.id;
    const club= await Club.findById(id)
    const courses= await Course.find();

    res.render('club-specific', {club, courses});
}

module.exports = {
    all_clubs,
    club_specific
}