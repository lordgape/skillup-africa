const fs = require("fs").promises;

// console.log(`Started`)
fs.readdir(__dirname, (err, files) => {
    if(err) {
        throw err;
    }

    console.log(files);
    console.log(`Done ready files`);
});
// console.log(`First Tick`);

// Todo Convert callback to promise using the fs promise module

// const mySpecialFunction = async () => {

//     const files =  await fs.readdir(__dirname);

//     console.log(files);
// }

// mySpecialFunction();

// fs.readdir(__dirname)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
