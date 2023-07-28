const express = require('express')

//express app

const app = express();

//listen for requests
app.listen(3000)

app.get('/', (req, res) => {
    //res.send('<p>who the hell are you</p>');
    res.sendFile('./view/index.html', {root: __dirname})
});

app.get('/about', (req, res) => {
    //res.send('<h1>about page</h1>')
    res.sendFile('./view/about.html', {root: __dirname})
}) 
//redirect
app.get('/about-us', (req, res) => {
    res.redirect('./about')
})
//404 page
app.use((req, res) => {
    res.sendFile('./view/404.html', {root: __dirname})
}) 