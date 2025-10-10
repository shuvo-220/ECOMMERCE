const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    postalCode: { type: Number, required: true },
    district: { type: String, required: true },
    division: { type: String, required: true },

    items: [
        {
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: Number, required: true },
            product: { type: mongoose.Schema.ObjectId, ref: "product", required: true },
        }
    ],


    user: { type: mongoose.Schema.ObjectId, ref: "user", required: true },
    itemsPrice: { type: Number, default: 0, required: true },
    shippingPrice: { type: Number, default: 0, required: true },
    totalPrice: { type: Number, default: 0, required: true },
    orderStatus: { type: String, required: true, default: 'Pending' },
    deliveredAt: Date,

})

module.exports = mongoose.model('order', orderSchema);