const routes = require('next-routes');

module.exports = routes()
    .add('index', '/')
    .add('about', '/about')
    .add('blogs', '/blogs')
    .add('portfolios', '/portfolios')
    .add('cv', '/cv')
    .add('test', '/test/:id');
