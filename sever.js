/*const http = require('http');
const fs = require('fs');
const _ = require('lodash')
const server = http.createServer((req, res) => {
   //loadash
    const num = _.random(0, 20);
    console.log(num)
    res.setHeader('content-Type', 'text/html');

    let path = './view/'
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200
            break;
        case '/about-meC':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end()
            break;
        default:
            path += '404.html';
            res.statusCode = 404
            break;
    }


    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err)
            res.end()
        }else{
            res.write(data);
            res.end()
        }
    });


})

server.listen(3000, 'localhost', () => {
    console.log('listining fro request on port 3000')
})