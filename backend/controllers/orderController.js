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