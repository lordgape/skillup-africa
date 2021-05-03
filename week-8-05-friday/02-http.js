const http = require("http"); // -> express fastify


// Stream - Instance EventEmitters
const server = http.createServer((req,res) => {
   console.log(`I got here`);
})

server.listen(3000, () => {
   console.log(`Listening on port 3000`);
})

