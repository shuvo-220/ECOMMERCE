const Order = require('../models/orderModel');

 exports.createOrder = async(req, res)=>{
     const {
        shippingInfo,
        orderItems,
        itemsPrice,
        shippingPrice,
        totalPrice
    } = req.body;
    try {
        const order = await Order.create({
            shippingInfo,
        orderItems,
        itemsPrice,
        shippingPrice,
        totalPrice
        })
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json(error.message)
    }
 }