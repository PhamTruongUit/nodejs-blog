const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('view', path.join(__dirname + 'resouces\\views'))
// console.log(__dirname + 'resouces\\views')

app.get('/home', (req, res) => res.render('home'))

app.listen(port, ()=> console.log(`http://localhost:${port}`));