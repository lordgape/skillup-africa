/* Write a program to perform a Get request on the route 
https://coderbyte.com/api/challenges/json/age-counting 
which contains a data key and the value is a string which contains
items in the format key=STRING, age=INTEGER. Your goal is to count how many items 
exist that have an age equal to 32. Then you should create a write stream to a file 
called output.txt and the contents should be the key values (from the json) each on a 
separate line in the order they appeared in the  json file (the file should end with a 
newline character on its own line). Finally, then output the SHA1 hash of the file.
*/

const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const RESOURCE_URL = 'https://coderbyte.com/api/challenges/json/age-counting';
const FILE_NAME = 'output.txt';

https.get(RESOURCE_URL, async (res) => {
  let body = '';
  res.on('data', (chunk) => {
    body += chunk;
  });

  res.on('end', async () => {
    const jsonBody = JSON.parse(body).data;
    const keyValueList = jsonBody.split(', ');
    const numberOfAge32 = keyValueList.filter((item) => item == 'age=32').length;

    keyValueList.unshift(numberOfAge32);
    const writeStream = fs.createWriteStream(FILE_NAME);

    for (const keyValue of keyValueList) {
      writeStream.write(keyValue + '\n');
    }

    writeStream.write('\n');

    let myHash = await getHash(FILE_NAME);

    console.log(myHash);
  });
});

const getHash = (fileName) =>
  new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(fileName);

    const hash = crypto.createHash('SHA1');

    readStream.on('data', (chunk) => {
      hash.update(chunk);
    });

    readStream.on('end', () => {
      resolve(hash.digest('hex'));
    });
  });
