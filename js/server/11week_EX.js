const http = require('http')
let reqHello = 0
let reqUsers = 0
let reqAbout = 0
const server = http.createServer( (request, response) => {
    console.log(`[${request.method}]${request.url} at ${new Date()}`)
    let totalRequests = reqAbout + reqHello + reqUsers
    if (request.url === '/hello' && request.method === 'GET') {
        reqHello++
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Hello from my server!')}

    else if (request.url === '/time' && request.method === 'GET') {
        response.write(`Current time is:${new Date()}` )
        response.end ()}

    else if (request.url === '/users' && request.method === 'GET') {
        reqUsers++
        const users = [
            { id: 1, name: "Alice", age: 25 },
            { id: 2, name: "Bob", age: 30 },
            { id: 3, name: "Charlie", age: 22 }
        ];
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(users))}

    else if(request.url === '/about' && request.method === 'GET'){
        reqAbout++
        response.write('My name is Dima, I study Back-end.' )
        response.end ()}

    else if(request.url === '/stats' && request.method === 'GET'){
        const stata = {
            "totalRequests": totalRequests,
            "routes": {
                "/hello": reqHello,
                "/users": reqUsers,
                "/about": reqAbout
            }}
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(stata))}

    else if (request.url.startsWith( '/users/') && request.method === 'GET'){
        const users = [
            { id: 1, name: "Alice", age: 25 },
            { id: 2, name: "Bob", age: 30 },
            { id: 3, name: "Charlie", age: 22 }];
        const userID = Number(request.url.split("/")[2])
        const user = users.find(u => u.id === userID)
        if (user) {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(user));
         } else {
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('User not found');
        }}
    else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Page not found');
    }
})

server. listen(4000)
