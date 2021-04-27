process.stdout.write("Hello");
process.stdout.write("World \n\n");

// console.log("Hello");
// console.log("World");





// Todo Create and array of question  and a ask function that accept an index of question to ask

const myArray = ['What is your favorite sport', 'what is your favorite food'];

function ask(index) {
    process.stdout.write(myArray[index])    
}

ask(0);