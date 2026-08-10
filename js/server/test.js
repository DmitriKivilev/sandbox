// let str_a = "/users/2"
// let splitSTR = str_a.split("/")
// const final = splitSTR[1] + splitSTR[2]
// const users = [
// { id: 1, name: "Alice", age: 25 },
// { id: 2, name: "Bob", age: 30 },
// { id: 3, name: "Charlie", age: 22 }
// ];
// if (final.startsWith("users2")){
//     response.writeHead(200, { 'Content-Type': 'application/json' });
//     response.end(JSON.stringify(users[1]))}
// else{
//     response.write("User not found")
//     response.end()}


// рассмотрели как работает синхронный и ассинхронный код

const fs = require('fs') //импортировали файловую систему для того что бы считать даныне
const http = require('http') // импорт протокола 
const server = http.createServer((request, response) => { // создали сервер и в тело добавили свитчкейс
    switch (request.url) {
        case '/home': {
            const data = fs.readFileSync('js/server/pages/about.html') // считывание даннх долгая операция
            response.write(data)
            break;
         
                
            // Работа ассинхронного кода 
            // setTimeout(() => {
            //     const data = 'best free online course!'
            //     response.write(data)
            //     response.end()
            // },3000)
            
            // Работа синхронного кода:
            // // const start = new Date()
            // // while(new Date() - start < 3000){
            // //     console.log(new Date() - start)
            // }
            // const data = 'best free online course!'
            // response.write(data)
            // response.end()
            // break
        }
        default: {
            response.write('404 not found')
            // response.end()
        }
    }
    response.end()
})

server.listen(3003)