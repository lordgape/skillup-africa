const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(__dirname + '/01-package.json') // start processing the file as soon as it receive the first byte
  stream.pipe(res) 
})
server.listen(3000)





