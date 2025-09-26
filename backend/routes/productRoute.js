const express = require('express');
const { create } = require('../controllers/productController');
const { auth, admin } = require('../middleware/auth');
const upload = require('../middleware/upload');
const router = express.Router();

router.post('/create',auth, admin, upload.single('image'), create);


module.exports = router