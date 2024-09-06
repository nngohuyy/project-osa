const express = require('express');
const PostController = require('../controllers/post');
const router = express.Router();

router.post('/', PostController.create);
router.get('/', PostController.findAll);
router.get('/:postId', PostController.findOne);
router.put('/:postId', PostController.update);
router.delete('/:postId', PostController.delete);

module.exports = router;
