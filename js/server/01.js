import http from 'http';
 
const server = http.createServer((req, res) => {
    if (req.url === '/hello' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello!');
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});
 
server.listen(3000);