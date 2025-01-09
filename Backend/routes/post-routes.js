const express = require('express');

const postController = require('../controller/post-controller');

const router = express.Router();


router.get('/', postController.getPosts);
router.get('/:pid', postController.postById);
router.get('/user/:uid', postController.getPostUserId)
router.post('/', postController.createPost);
router.patch('/:pid', postController.updatePost);
router.delete('/:pid', postController.deletePost);

module.exports = router;