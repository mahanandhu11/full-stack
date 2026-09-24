const express = require("express");

const router = express.Router();

// Temporary posts array
let posts = [];

// Get all posts
router.get("/", (req, res) => {
  res.json(posts);
});

// Add new post
router.post("/", (req, res) => {
  const { username, content } = req.body;

  const newPost = {
    id: Date.now(),
    username,
    content,
  };

  posts.push(newPost);

  res.json({
    message: "Post Added Successfully",
    post: newPost,
  });
});

module.exports = router;