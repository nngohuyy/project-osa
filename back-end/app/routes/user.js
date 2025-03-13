const express = require('express');
const UserController = require('../controllers/user');
const router = express.Router();

router.post('/', UserController.create);

module.exports = router;
