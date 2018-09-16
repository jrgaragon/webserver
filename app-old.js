const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    let result = {
        nombre: 'jorge',
        edad: 34,
        url: request.url
    }

    response.write(JSON.stringify(result));
    response.end();
}).listen(8080);

console.log('escuhando 8080');