const Product = require('../models/productModel');
const cloudinery = require('../utils/cloudinery');

exports.create = async(req, res)=>{
    const{name, description,price,stock,category} = req.body;
    try {
        let imageUrl = ''
        if(req.file){
            const uploadRes = await cloudinery.uploader.upload(req.file.path, {
                folder : 'image-upload'
            })
            imageUrl=uploadRes.secure_url
        }
        const product = await Product.create({
            name,description,price,category,stock,image:imageUrl
        })
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
    }
}


exports.getAllProducts = async(req, res)=>{
    const products = await Product.find({});
    if(!products){
        res.status(500).json('products not found');
    }
    res.status(200).json(products)
}