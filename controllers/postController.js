
const Post = require('../model/post');


const getAllPosts =  async (req, res, next) => {

    try{

        const posts = await Post.find();

        res.status(200).json({
            status: 'success',
            data: {
                posts: posts
            }
        });

    }catch(err){
        console.log(err);
    }
}


const createPost = async (req, res, next) => {

    try{

        const newPost = new Post({title: req.body.title, article: req.body.article});

        await newPost.save();

        res.status(201).json({
            status: 'success',
            message: 'post successfully created',
            data: {
                newPost: newPost
            }
        });

    }catch(err){
        console.log(err);
    }
}


const editPost = async (req, res, next) => {

    try{
        const postId = req.params.postId;
        const post = await Post.findById(postId);
        if (!post){
            return res.status(400).json({
                status: 'fail',
                error: 'post not found'
            });
        }

        if (req.body.article){
            post.article = req.body.article;
        }
        if (req.body.title){
            post.title = req.body.title;
        }

        await post.save();

        res.status(200).json({
            status: 'success',
            message: 'post updated',
            data: {
                post: post
            }
        });

    }catch(err){
        console.log(err);
    }
}


const deletePost = async (req, res, next) => {

    try{
        const post = await Post.findById(req.params.postId);
        if (!post){
            return res.status(400).json({
                status: 'fail',
                error: 'No post found'
            });
        }

        await Post.findByIdAndDelete({_id: req.params.postId});

        res.status(200).json({
            status: 'success',
            message: 'post successfully deleted'
        });


    }catch(err){
        console.log(err);
    }
}


module.exports = {
    getAllPosts,
    createPost,
    editPost,
    deletePost
}