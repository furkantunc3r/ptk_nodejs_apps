const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    const url = ctx.request.url;

    if (url === '/') {
        ctx.body = '<h1>Welcome to Index page';
    } else if (url === '/about') {
        ctx.body = '<h1>Welcome to About page';
    } else if (url === '/contact') {
        ctx.body = '<h1>Welcome to Contact page';
    } else {
        ctx.status = 404;
        ctx.body = `<h1>404 - Not Found`;
    }
});

const port = 3000;

app.listen(port, () => {
    console.log(`App listening on: ${port}`);
});