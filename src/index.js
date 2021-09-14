const express = require('express')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const path = require('path')
const app = express()
const port = 3000

// HTTP logger
app.use(morgan('combined'))

// Template engine handlebars
app.engine('handlebars', handlebars())
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        // helpers: {
        //     sum: (a, b) => a + b,
        // },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.get('/home', (req, res) => res.render('home'))
app.get('/new', (req, res) => res.render('new'))

app.listen(port, ()=> console.log(`http://localhost:${port}`));