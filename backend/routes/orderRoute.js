const express = require('express');
const router = express.Router();
const {createOrder, getOrder, getAllOrders, getOrderDetails}  = require('../controllers/orderController');
const { auth, admin } = require('../middleware/auth');


router.post('/create', auth, createOrder)
router.get('/myorder',auth, getOrder)
router.get('/orders', auth,admin, getAllOrders)
router.get('/:id', admin, getOrderDetails)

module.exports = router;