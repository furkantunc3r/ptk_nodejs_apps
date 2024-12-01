const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();
const port = 3000;


// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));

// ENDPOINTS
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/add', (req, res) => {
    res.render('add');
});

// LISTENER
app.listen(3000, () => {
    console.log(`App listening on: ${ port }`);
});