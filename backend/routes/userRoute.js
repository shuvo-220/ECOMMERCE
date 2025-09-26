const express = require('express');
const upload = require('../middleware/upload');
const { register, login, profile } = require('../controllers/userController');
const { auth } = require('../middleware/auth');
const router = express.Router();


router.post('/register', upload.single('image'), register);
router.post('/login', login);
router.get('/profile',auth, profile)

module.exports = router;