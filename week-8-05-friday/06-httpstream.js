const http = require('http');  // express

const server = http.createServer((req, res) => {
  // `req` is an http.IncomingMessage, which is a readable stream.
  // `res` is an http.ServerResponse, which is a writable stream.
  console.log(`Inside CREATE SERVER STREAM`);
  let body = '';
  // Get the data as utf8 strings.
  // If an encoding is not set, Buffer objects will be received.
  req.setEncoding('utf8');

  // Readable streams emit 'data' events once a listener is added.
  req.on('data', (chunk) => {
    console.log(`Inside data event listener`);
    body += chunk;
  });

  // The 'end' event indicates that the entire body has been received.
  req.on('end', () => {
    console.log(`Inside end event listener - ${body}`);
    try {
      const data = JSON.parse(body);
      // Write back something interesting to the user:
      res.write(JSON.stringify(data));
      res.end();

    } catch (er) {
      // uh oh! bad json!
      console.log(`oops something went wrong`);
      res.statusCode = 400;
      return res.end(`error: ${er.message}`);
    }
  });
});

server.listen(3000);


