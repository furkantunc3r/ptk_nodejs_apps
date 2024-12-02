const Post = require('../models/Post');

getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.render('index', {
            posts
        });
    } catch (error) {
        console.log(error, 'Can not get posts');
    }
};

getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        res.render('post', {
            post
        });
    } catch (error) {
        console.log(error, 'Failed to get post');
    }
};

createPost = async (req, res) => {
    const {
        title,
        description
    } = req.body;

    try {
        await Post.create({
            title,
            description
        });
    } catch (error) {
        console.log(error, 'Failed to create');
    }

    res.redirect('/');
};

createPostGet = (req, res) => {
    res.render('add');
};

editPostGet = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        res.render('edit', {
            post
        });
    } catch (error) {
        console.log(error, 'Edit error');
    }
};

editPost = async (req, res) => {
    try {
        const post = await Post.findOne({
            _id: req.params.id
        });

        post.title = req.body.title;
        post.description = req.body.description;

        post.save();

        res.redirect(`/post/${req.params.id}`);
    } catch (error) {
        console.log(error, 'Edit error');
    }
};

deletePost = async (req, res) => {
    try {
        await Post.findOneAndDelete({
            _id: req.params.id
        });

        res.redirect(`/`);
    } catch (error) {
        console.log(error, 'Delete error');
    }
};

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    createPostGet,
    editPostGet,
    editPost,
    deletePost
}