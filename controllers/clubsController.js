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

const add_club = async (req,res) => {

    const club= new Club({
        name: 'SilverScreen',
        council: ['James Bond','Daniel Craig'],
        thumbnail: "https://drive.google.com/uc?id=1vPpb8DAbSRX3Uck86kw8RC4TOgSThyCr",
        description: 'Nullam elementum felis lectus, eu pellentesque nisi viverra vel. Sed a dignissim enim. Vivamus at turpis dolor.'
    });
    
    club.save()
     .then((result) =>{
         res.send(result)
     })
     .catch((err)=>{
         console.log(err);
     });
}
module.exports = {
    all_clubs,
    club_specific,
    add_club,
}

