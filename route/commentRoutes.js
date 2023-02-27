const express = require('express');
const router = express.Router();

const commentController = require('../controller/commentController')

router.post("/post", commentController.postComment);

router.get("/", commentController.getAllComments)

module.exports = router;