const express = require('express');
const postModel = require('../models/postModels.js');

const router = express.Router();

// GET all posts
router.get('/', async (req, res) => {
  try {
    const posts = await postModel.getAllPosts();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// POST a new post
router.post('/', async (req, res) => {
  const { user_id, user_name, content, location } = req.body;

  if (!user_id || !user_name || !content) {
    return res.status(400).json({ error: 'user_id, user_name, and content are required' });
  }

  try {
    const postId = await postModel.addPost(user_id, user_name, content, location);
    res.status(201).json({ id: postId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
