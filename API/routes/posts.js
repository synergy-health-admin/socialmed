const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// CREATE A POST
router.post("/", async (req, res) =>{
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err){
        res.status(500).json(err);
    }
});

// UPDATE A POST
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("The post has been updated!");
        } else {
            res.status(403).json("Dude, you can update only your post 😂 !")
        }
    } catch (err) {
        res.status(500).json(err);
    }     
});

// DELETE A POST
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("The post has been deleted!");
        } else {
            res.status(403).json("Dude, you can delete only your post 😂 !")
        }
    } catch (err) {
        res.status(500).json(err);
    }     
});

// LIKE/DISLIKE A POST
router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes: req.body.userId}});
            res.status(200).json("Someone likes your post 😍 ");
        } else {
            await post.updateOne({$pull:{likes: req.body.userId}});
            res.status(403).json("You has been disliked 😩 !")
        }
    } catch (err) {
        res.status(500).json(err);
    }     
});

// GET A POST
router.get("/:id", async (req, res) =>{
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err){
        res.status(500).json(err);
    }
});

// GET A TIMELINE OF POSTS
router.get("/timeline/all", async (req, res) =>{
    try {
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({userId: currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) =>{
                return Post.find({ userId: friendId});
            })
        );
        res.json(userPosts.concat(...friendPosts))
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;