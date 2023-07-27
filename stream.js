const fs = require('fs') ;

const readStream = fs.createReadStream('./docs/blog.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog3.txt', {encoding: 'utf8'});
readStream.on('data', (chunk) => {
    console.log('....new chunk.....')
    console.log(chunk)
})

