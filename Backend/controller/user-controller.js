const getUsers = (req, res, next) => {
    res.json({}, '-password')
};

const signup = (req, res, next) => {};

const login = (req, res, next) => {};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;