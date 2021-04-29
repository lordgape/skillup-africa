const fs = require("fs");

// console.log(`Started`);
// fs.readdir(__dirname, (err, files) => {
//   if (err) {
//     throw err;
//   }
//   console.log(files);
//   console.log(`Done ready files`);
// });
// console.log(`First Tick`);

// Todo. Convert to promise uing the util module

const {promisify} = require("util");
const myFSPromisied = promisify(fs.readdir);

const promiseReadFile = async () => {
    try {
        let files =  await myFSPromisied("__dirname");
        console.log(files);
        
    } catch (error) {
        console.log(error.message);
    }
}

promiseReadFile();

// myFSPromisied(__dirname).then((res) => {
//     console.log(res);
// }).catch((err) => console.log(err))

// ASSIGNMENT. Create a copier function, when given a directory path. will duplicate all files in that directory to a given destination path



