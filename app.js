const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')


//express app
const app = express();
//connect to mongoDb
const dbURI = `mongodb+srv://Roger:Roger@cluster0.xvqg1y0.mongodb.net/node-tut's?retryWrites=true&w=majority`
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(3001))
.catch((err) => { console.log(err)})
//register view engine
app.set('view engine', 'ejs')

//listen for requests

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'))

app.get('/', (req, res) => {const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];

    res.render('index', {title: 'Home', blogs})
});

app.get('/about', (req, res) => {
    //res.send('<h1>about page</h1>')
    res.render('about', {title: 'About'})
}) 
//redirect
app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'create new blog'})
})
//404 page
app.use((req, res) => {
    res.render('404', {title: '404'})
}) 