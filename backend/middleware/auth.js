const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.auth = async(req, res, next)=>{
    try {
        let token = req.headers.authorization?.split(" ")[1]
        if(!token){
            res.status(400).json('token not found');
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decode.id);
        req.user = user;
        next()
    } catch (error) {
        console.log(error.message)
    }
}

exports.admin = (req, res, next)=>{
    if(req.user.role === 'admin'){
        next()
    }else{
        res.status(400).json(`${req.user.role} is not allowed to access`)
    }
}