const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();

const ejs = require('ejs');
const path = require('path');
const Post = require('./models/Post');
const postController = require('./controllers/postController');

const app = express();

// Connect to DB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
    } catch (error) {
        console.log(error, 'Failed Connection to DB');
    }
};

connectDB();

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}));

// ENDPOINTS
app.get('/', postController.getAllPosts);
app.get('/post/:id', postController.getPost);
app.post('/posts', postController.createPost);
app.get('/add', postController.createPostGet);
app.get('/edit/:id', postController.editPostGet);
app.put('/edit/:id', postController.editPost);
app.delete('/delete/:id', postController.deletePost);
app.get('/about', (req, res) => {
    res.render('about');
});

// LISTENER
app.listen(3000, () => {
    console.log(`App listening on: ${ process.env.PORT }`);
});