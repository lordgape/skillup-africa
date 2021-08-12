/* Write a program to perform a Get request on the route 
https://coderbyte.com/api/challenges/json/age-counting 
which contains a data key and the value is a string which contains
items in the format key=STRING, age=INTEGER. Your goal is to count how many items 
exist that have an age equal to 32. Then you should create a write stream to a file 
called output.txt and the contents should be the key values (from the json) each on a 
separate line in the order they appeared in the  json file (the file should end with a 
newline character on its own line). Finally, then output the SHA1 hash of the file.

Example Input {"data":"key=IAfpK, age=32, key=WNVdi, age=64, key=jp9zt, age=40, key=9snd2, age=32"} 
Example Output 7caa78c7180ea 52e5193d2b4c22e5e8a9e03b486
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
    let keyValueList = jsonBody.split(', ');
    keyValueList = keyValueList.reduce(
      (acc, cur) => {
        const splitData = cur.split('=');
        if (splitData[0] == 'key') {
          acc.prev = splitData[1];
        }
        
        if (splitData[0] == 'age' && splitData[1] == 32) {
          acc.age32Keys.push(acc.prev);
        }

        return acc;
      },
      { prev: '', age32Keys: [] }
    );

    keyValueList = keyValueList.age32Keys;

    const writeStream = fs.createWriteStream(FILE_NAME);

    const hash = crypto.createHash('SHA1');

    for (const keyValue of keyValueList) {
      const fileData = keyValue + '\n';
      writeStream.write(fileData);
      hash.update(fileData);
    }
    console.log(hash.digest('hex'));
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
