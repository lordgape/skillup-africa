const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  fs.readFile(__dirname + '/01-package.json', (err, data) => { // All data/byte to memory 200G
    if (err) {
      console.log(err);
    }
    res.end(data);
  });
});
server.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
