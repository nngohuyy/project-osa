const express = require('express');
const PostController = require('../controllers/post');
const router = express.Router();

router.post('/', PostController.create);

module.exports = router;
