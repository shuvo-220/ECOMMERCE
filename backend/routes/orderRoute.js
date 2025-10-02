const express = require('express');
const router = express.Router();
const {createOrder, getOrder}  = require('../controllers/orderController');
const { auth } = require('../middleware/auth');


router.post('/create', auth, createOrder)
router.get('/myorder',auth, getOrder)

module.exports = router;