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
    else if(request)

    else if (request.url === '/users/' && request.method === 'GET'){
        response.write('Page not found' )
        response.end ()}

    let str_a = "/users/2"
    let splitSTR = str_a.split("/")
    const final = splitSTR[1] + splitSTR[2]
    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 }
    ];
    if (final.startsWith("users2")){
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(users[1]))}
    else{
        response.write("User not found")
        response.end()}
    })

server. listen(4000)
