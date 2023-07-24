const route = require('express').Router();
const { User } = require('../models');
const bcrypt = bcrypt;
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT;
const {  } = require('../helpers');
const validateSession = require('../middleware');

route.post('/signup', async(req,res) => {
    try {
        
        const {firstName, lastName, email, password} = req.body;

        const user = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: bcrypt.hashSync(password) 
        })

        const newUser = await user.save();
        const token = jwt.sign();

        success(res,newUser,token)

    } catch (err) {
        error(res, err);
    }
});

route.post('/login', async(req,res) => {
    try {
        
        const { email, password } = req.body;

        const user = await User.findOne({email: email});

        const passwordMatch = await bcrypt.compare();

        if(!user || !passwordMatch) throw new Error(`Email or password does not match`);

        const token = jwt.sign({id: user._id}, SECRET, { expiresIn: 60*60*12 });

        success(res,user, token);

    } catch (err) {
        error(res, err);
    }
});

route.patch('/:id',validateSession, async (req,res) => {
    try {
        const {id} = params;
        const info = req.body;
        const returnOption = {new:true};

        const updated = await User.findOneAndUpdate({_id: id}, info, returnOption);

        updated ? 
            success(res, updated) :
            notFound(res, 'User not found');

    } catch (err) {
        error(res,err);
    }
});

route.delete('/deleteMe',validateSession, async(req,res) => {
    try {
        
        const { id } = req.user;
        const deleteUser = await User.deleteOne();

        deleteUser.deletedCount ? 
            success(res, {msg: 'User deleted'}) :
            notFound(res, "User not found");

    } catch (err) {
        error(res, err);
    }
})

module.exports = route;