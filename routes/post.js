
const express = require('express');

const postController = require('../controllers/postController');


const router = express.Router();


// @path    GET /posts
// @desc    Get all posts
// @access  Public
router.get('/', postController.getAllPosts);


// @path    POST /posts
// @desc    Create new post
// @access  Public
router.post('/', postController.createPost);


// @path    PATCH /posts/:postId
// @desc    Edit post
// @access  Public
router.patch('/:postId', postController.editPost);


// @path    DELETE /posts/:postId
// @desc    Delete post
// @access  Public
router.delete('/:postId', postController.deletePost);


module.exports = router;