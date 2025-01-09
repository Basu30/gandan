const { v4: uuidv4 } = require('uuid')
const HttpError = require('../models/http-error');
const User = require('../models/user');



// Fetching all users
const getUsers = async (req, res, next) => {
    let users;
    try{
       users = await User.find({}, '-password');
    } catch (err) {
        const error = new HttpError("Fetching all users failed, please try again later!", 500);
        return next(error);
    }

    res.json({users: users.map(user => user.toObject({ getters: true }))})
};

// Fetching a user
const getUserById = async (req, res, next ) => {
    const userId = req.params.uid;
    
    let user;
    try {
        user = await User.findById(userId)
    }  catch (err) {
        const error = new HttpError("Fetching a user failed, please try again later!", 500);
        return next(error);
    }
   
    if(!user){
        const error = new HttpError('Could not find a user for the provided id.', 404)
        return next(error) 
    }

    res.json({ user: user.toObject({ getters: true })});
}

// Sign up
const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError("Signing up failed, please try again later!", 500);
        return next(error);
    }
   
    if (existingUser) {
        const error = new HttpError("User exists already", 422)
        return next(error);
    };

  
    const createdUser = new User({
        name,
        email,
        password,
        posts: []
    });
    

    try{
        await createdUser.save() 
    } catch (err) {
        const error = new HttpError('Signing up failed.', 500);
        return next(error)
    }

    res.status(201).json({ user: createdUser.toObject({ getters: true})})
};


// Login
const login = async (req, res, next) => {
    const { email, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError("Login in failed, please try again later!", 500);
        return next(error);
    }

   

    if(!existingUser || existingUser.password !== password) {
        const error = new HttpError("Could not identify user, credential seem to be wrong!", 401);
        return next(error) 
    }

    res.json({ message: 'Logged in'})

};

exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.signup = signup;
exports.login = login;