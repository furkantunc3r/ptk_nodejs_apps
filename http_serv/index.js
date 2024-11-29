const http = require('http');

http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.write('<h2>Welcome to Index page');
    } else if (url === '/about') {
        res.write('<h2>Welcome to About page');
    } else if (url === '/contact') {
        res.write('<h2>Welcome to Contact page');
    } else {
        res.statusCode = 404;
        res.write('<h1>404 - Not Found</h1>');
    }

    res.end();
}).listen(5000, () => {
    console.log('App listening on: 5000');
});