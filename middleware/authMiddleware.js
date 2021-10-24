const jwt = require("jsonwebtoken");
const { identity } = require("lodash");
const User = require("../models/user");

const requireAuth = (req,res,next) => {
    const token = req.cookies.jwt;

    // check for token existence and validity
    if(token) {
        jwt.verify(token, 'Athena designed by Ayushman Choudhary', (err, decodedToken) => {
            if(err) {
                console.log(err.message);
                res.redirect('/login');
            } else {
                console.log(decodedToken);
                next();
            }
        })
    } else {
        res.redirect('/login');
    }
}

// check User
const checkUser = (req,res,next) => {
    const token = req.cookies.jwt;

    // check for token existence and validity
    if(token) {
        jwt.verify(token, 'Athena designed by Ayushman Choudhary', async (err, decodedToken) => {
            if(err) {
                console.log(err.message);
                res.locals.user= null;
                next();
            } else {
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })
    } else {
        res.locals.user = null;
        next();
    }

}
module.exports = {requireAuth, checkUser};