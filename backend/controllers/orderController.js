const Order = require('../models/orderModel');


exports.createOrder = async (req, res) => {
    const { address, phone, postalCode, district, division, items, user, itemsPrice, shippingPrice, totalPrice } = req.body
    try {
        const order = await Order.create({ address, phone, postalCode, district, division, items, user, itemsPrice, shippingPrice, totalPrice })
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


exports.getOrder = async (req, res) => {
    const order = await Order.find({ user: req.user.id })
    if (!order) {
        return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order)
}


exports.getAllOrders = async(req, res)=>{
    const orders = await Order.find({})
    if(!orders){
        res.status(400).json('orders not found');
    }
    res.status(200).json(orders)
}

exports.getOrderDetails = async(req, res)=>{
    const order = await Order.findById(req.params.id)
    if(!order){
        res.status(400).json('order not found');
    }
    res.status(200).json(order)
}