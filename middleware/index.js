const jwt = require('jsonwebtoken');
const { User } = require('../models');

const validateSession = async (req, res, next) => {
    try {

        const token = req.headers.authorization;
        const decoded = await jwt.verify(token, 'SECRET');
        if(!decoded) throw new Error('User not authorized');

        const user = User.findById(decoded.id);

        if(!user) throw new Error('User Not Found');
        req.user = user;

        
        
    } catch (err) {
        res.json({message: err.message})
    }
}

module.exports = validateSession;