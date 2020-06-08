const http = require('http');
const fs = require('fs');
const users = {
    name: 'Jack Rabbit',
    job: 'Restaurant',
    age: 123,
    name: 'John Doe',
    job: 'being deadn',
    age: 32,
}

const server = http.createServer((req, res) => {
    res.writeHead(200,{
        'Content-type':'application/json'
    });

    if (req.url === '') {
        res.writeHead(404, {
            'Content-Type': 'text/plain',
        });
        res.end('No Route')
        const readStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
        readStream.pipe(res);
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
        const readStream = fs.createReadStream(__dirname + '/about.html', 'utf8')
        readStream.pipe(res);
    } else if (req.url === '/users') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(users));
    } else if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
        const readStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
        readStream.pipe(res);
    }
    console.log(req.url);
});

server.listen(3000, () => {
    console.log(`Listening on port 3000`);
})
