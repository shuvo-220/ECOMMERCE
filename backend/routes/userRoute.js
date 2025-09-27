const express = require('express');
const upload = require('../middleware/upload');
const { register, login, profile, getAllUser } = require('../controllers/userController');
const { auth, admin } = require('../middleware/auth');
const router = express.Router();


router.post('/register', upload.single('image'), register);
router.post('/login', login);
router.get('/profile',auth, profile)
router.get('/users', auth, admin, getAllUser)

module.exports = router;