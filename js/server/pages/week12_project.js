import http from 'http'
import fs from 'fs'

function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) =>
            err ? reject(err) : resolve(data)
        );
    }); 
}
const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}
const server = http.createServer(async (request, response) => {
    switch (request.url) {

        case "/home": {
             await delay(3000)
            readFilePromise('js/server/pages/home.html')
                .then(data => {
                    response.end(data)
                })
                .catch(err => {
                    response.statusCode = 500
                    response.end(`Ошибка сервера`)
                })
            break
        }
        case "/about": {
            await delay(2000)
            readFilePromise('js/server/pages/about.html')
                .then(data => {
                    response.end(data)
                })
                .catch(err => {
                    response.statusCode = 500
                    response.end(`Ошибка сервера`)
                })
            break
        }
        default: {
    response.write(" 404 not found")
    response.end()
}
    }
})

server.listen(3000)