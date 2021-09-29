const User = require('../models/user');

const HandleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {email: '', password: ''};

    // duplicate email validation
    if (err.code === 11000) {
        errors.email = 'This email already exists';
        return errors;
    }

    // error validation
    if(err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}

const register_get= (req, res) => {
    res.render('register');
}

const register_post= async (req, res) => {
    const {email, password}= req.body;
    
    try {
        const user = await User.create({email, password});
        res.status(201).json(user);
    } catch (err) {
        const errors = HandleErrors(err);
        res.status(400).json({ errors });
    }
}

const login_get= (req, res) => {
    res.render('login');
}

const login_post= (req, res) => {
    const {email, password}= req.body;
    console.log(email,password);
    res.send('login successful');
}

module.exports= {
    register_get,
    register_post,
    login_get,
    login_post
}