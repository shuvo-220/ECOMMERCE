const express = require('express');
const { create, getAllProducts, productDetails } = require('../controllers/productController');
const { auth, admin } = require('../middleware/auth');
const upload = require('../middleware/upload');
const router = express.Router();

router.post('/create',auth, admin, upload.single('image'), create);
router.get('/products', getAllProducts)
router.get('/:id', productDetails)


module.exports = router