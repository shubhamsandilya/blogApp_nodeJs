const express = require("express");
const router = express.Router();

const { dummyLink} = require("../controllers/likeController");
const {createComment} = require("../controllers/commentContoller");
const {createPost, getAllPosts} = require("../controllers/postController");



//Mapping Create
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);


module.exports = router;
