const http = require('http')
const server = http.createServer( (request, response) => {
    if (request.url === '/bye' && request.method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Goodbye!')}
    else if (request.url === '/hello' && request.method === 'GET') {
        console.log(`[${request.method}]${request.url} at ${new Date()}`)
        response.write('DZ' )
        response.end ()}
    else{
        response.write('noneee' )
        response.end ()}
    })
server. listen(3003)