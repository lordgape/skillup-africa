const fs = require("fs")

console.log(`Started`);
try {
    const files = fs.readdirSync("__dirname")
    console.log(files);
    
} catch (error) {
    console.log(error.message);
}
console.log(`Completed`);

// Todo Handle error if directory path does not exist.