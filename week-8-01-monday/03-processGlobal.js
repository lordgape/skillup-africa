// console.log(process.pid);
// console.log(process.versions.node);

//  console.log(process.argv);

// process.env.PORT;

// DB_hostname = azure_special

// TODO deconstructive the argv property and print to console
const [nodeFileExceuter,filenamePath,username] = process.argv;

console.log(`${nodeFileExceuter} - ${filenamePath} - ${username}`);


// Todo create a grab func that uses flag and print to the console [yam,egg,bean,amala].indexOf(amala)

const grab = flag => {
    let flagIndex = process.argv.indexOf(flag);
     let indexOfValue = flagIndex + 1;
    return process.argv[flagIndex];
}


console.log(`Language - ${grab('--lang')}` );
console.log(`user - ${grab('--nice')}` );
