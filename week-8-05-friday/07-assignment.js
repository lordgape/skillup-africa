// Create a video server that allows your friend to stream the latest movie on your website.

const http = require("http");
const fs = require("fs");
const path = require("path")

const server = http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type" : "video/mp4"})
    const readableStream = fs.createReadStream(path.join(__dirname,"spirit.mp4"));
    readableStream.pipe(res);
})

server.listen(3000,() => {
    console.log(`Server is up and running`);
})