const postController = require('../controllers/posts.routes');

const express = require('express');
const router = express.Router();
router.get('/' , postController.getAllPosts);

module.exports = router;