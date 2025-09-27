const User = require('../models/userModel');
const cloudinery = require('../utils/cloudinery');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register=async(req, res)=>{
    const{name,email,password} = req.body;
    try {
        let imageUrl = ''
        if(req.file){
            const uploadRes = await cloudinery.uploader.upload(req.file.path,{
                folder:'image-upload'
            })
            imageUrl=uploadRes.secure_url
        }
        const user = await User.create({
            name,email,password,image:imageUrl
        })
        res.status(200).json(user)
    } catch (error) {
        console.log(error.message)
    }
}

exports.login = async(req, res)=>{
    const{email, password} = req.body;
    try {
        const user = await User.findOne({email})
        if(!user){
            res.status(500).json('user not found');
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            res.status(400).json('invalid email or password')
        }
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET,{
            expiresIn:'2d'
        });
        res.status(200).json({user, token})
    } catch (error) {
        console.log(error.message)
    }
}

exports.profile=async(req, res)=>{
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(500).json('user not found');
    }
    res.status(200).json(user)
}


exports.getAllUser = async(req, res)=>{
    const users = await User.find({})
    if(!users){
        res.status(500).json('user not found');
    }
    res.status(200).json(users)
}