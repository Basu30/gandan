const express = require('express');
const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose')
const HttpError = require('../models/http-error');
const Post = require('../models/post');
const User = require('../models/user');



// Fetch all posts of a user
const getPosts = async (req, res, next) => {
    let post;
    try {
        post = await Post.find()
    } catch (err) {
        const error = new HttpError('Could not find a post. Please try again.', 422);
        return next(error)
    }
    res.json({post: post.map(p => p.toObject({ getters: true }))})
};


// Fetch post by ID
const postById = async (req, res, next) => {
    const postId = req.params.pid;

    let post;
    try {
        post = await Post.findById(postId)
    } catch (err) {
        const error = new HttpError('Could not find a post. Please try again.', 422);
        return next(error)
    }

    res.status(200).json({ userPost: post})
}; 


// Fetch post by user id
const getPostUserId = async (req, res, next) => {
    const userId = req.params.uid;

    let userWithPosts;
    try{
        userWithPosts = await User.findById(userId).populate('posts')
    } catch (err) {
        const error = new HttpError('Could not fetch post. Please try again. ', 500);
        return next(error)
    }
    if(!userWithPosts || userWithPosts.length === 0){
        const error = new HttpError('Could not find posts for provided id. ', 404);
        return next(error)
    }

    res.json({ posts: userWithPosts.posts.map(p => p.toObject({ getters: true }))})
};


// Post of user
const createPost = async (req, res, next) => {

    const { title, content, image, creator } = req.body;
    
    const createdPost = new Post({
        title,
        content,
        image,
        creator
    });

    // Checking if the user exists.
    let user;
    try {
        user = await User.findById(creator);
    } catch (err) {
        const error = new HttpError('Creating post failed. Please try again.', 500);
        return next(error)
    };

    if (!user){
        const error = new HttpError('Could not find user for provided id. Please try again.', 404);
        return next(error)
    }

    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();

        await createdPost.save({ session: sess });
        user.posts.push(createdPost);
        await user.save({ session: sess });

        await sess.commitTransaction();
        sess.endSession();

     } catch (err) {
        if (sess) {
            await sess.abortTransaction();
            sess.endSession();
        }
        throw err;
     }
   
    res.status(200).json({message: createdPost});
};


// Update post
const updatePost = async (req, res, next) => {
    const { title, content, image } = req.body;
    const postId = req.params.pid;
  
    // Find a post for both Post and User
    let post;
    try {
        post = await Post.findById(postId).populate('creator') // Populate to access the user
        if(!post){
            const error = new HttpError('Post not found!', 404);
            return next(error)
        }
    } catch (err) {
        const error = new HttpError('Updating post failed. Please try again.', 500);
        return next(error)
    };

    // Update the post content
    post.title = title,
    post.content = content,
    post.image = image
   
    // Updating post for both Post and User
    try{
        // Start Session
        const sess = await mongoose.startSession();
        sess.startTransaction();

        // Save updated post
        await post.save({ session: sess });               

        // Update the user's post (if maintaining a list of post details or references)
        const user = post.creator;
        const postIndex = user.posts.findIndex((p) => p.toString() === postId);
        if(postIndex !== -1) {
            user.posts[postIndex] = post._id;   // Update reference if it exists
        } else {
            user.posts.push(post._id)           // Add reference if it doesn't exist
        }

        await user.save({ session: sess });
        sess.commitTransaction();

        console.log('Post and User updated successfully');
    } catch (err) {
        const error = new HttpError('Updating post failed. Please try again.', 500);
        return next(error);
    };

    res.status(200).json({ post: post.toObject({ getters: true })})
};


// Delete a post
const deletePost = async (req, res, next) => {
    const postId = req.params.pid;
  
    let post;
    try {
        post = await Post.findById(postId).populate('creator');
        if (!post){
            const error = new HttpError('Post not found!', 404);
            return next(error) }
    } catch (err) {
        const error = new HttpError('Could not find post for provided id. ', 500);
        return next(error)
    };
 
    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();

        // Delete post from Post
        await post.deleteOne({ session: sess });

        // Delete post from User
        post.creator.posts.pull(post);
        await post.creator.save({ session: sess });

        await sess.commitTransaction();
    } catch (err) {
        const error = new HttpError('Deleting post failed. ', 500);
        return next(error)
    };

    res.status(200).json({message: 'Post deleted successfully.' })
};

exports.getPosts = getPosts;
exports.postById = postById;
exports.getPostUserId = getPostUserId;
exports.createPost = createPost;
exports.updatePost = updatePost;
exports.deletePost = deletePost;