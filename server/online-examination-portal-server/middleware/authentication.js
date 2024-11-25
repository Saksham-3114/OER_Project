const Examiner = require('../models/Examiner');
const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors');

const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log("YOYO")
    console.log(authHeader);
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new UnauthenticatedError('Please provide a valid token');
    }

    const token = authHeader.split(' ')[1];
    console.log(token);
    try {
        // console.log(process.env.JWT_SECRET);
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        console.log(payload);
        req.user = { userID: payload.userID, email: payload.email };
        next();
    } catch (error) {
        throw new UnauthenticatedError('Authentication Invalid');
        // res.redirect('/login');
    }
}

module.exports = auth;