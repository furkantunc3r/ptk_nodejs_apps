const express = require('express');
const mongoose = require('mongoose');

const ejs = require('ejs');
const path = require('path');
const Post = require('./models/Post');

const app = express();

// Connect to DB
try {
    mongoose.connect(process.env.DB_CONNECTION);
} catch (error) {
    console.log(error, 'Failed Connection to DB');
}

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// ENDPOINTS
app.get('/', async (req, res) => {
    try {
        const posts = await Post.find();

        res.render('index', {
            posts
        });
    } catch (error) {
        console.log(error, 'Can not get posts');
    }
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/posts', async (req, res) => {
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
});

// LISTENER
app.listen(3000, () => {
    console.log(`App listening on: ${ process.env.PORT }`);
});