const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number, required:true},
    category:{type:String, required:true},
    stock:{type:String, required:true},
    image:{type:Object, required:true},
    numOfReviews:{type:Number, default:0},
    rating:{type:Number, default:0},
    reviews:[
        {
            user:{type:mongoose.Schema.ObjectId, ref:'user'},
            name:{type:String, required:true},
            rating:{type:Number, required:true},
            commnet:{type:String, required:true}
        }
    ],
    user:{type:mongoose.Schema.ObjectId, ref:'user'}
},{
    timestamps:true
})

module.exports = mongoose.model('product', productSchema);