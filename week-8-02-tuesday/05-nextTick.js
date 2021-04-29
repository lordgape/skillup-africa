console.log(`Start of log`);

setTimeout(() => {
  console.log(`Set timeout is called`);
}, 0);

const now = Promise.resolve("Now is the time").then((res) => console.log(res));

console.log(`I came after now`);

const mustRun = () => {
    console.log("Next tick is been printed");
}

process.nextTick(mustRun);

// Event Loop - manager for
//Call  stack [] - message queue [anonymous], Job queue [now], nextTick[mRun]

// TODO guess order of print out -

// Oghene =  Next tick is been printed

// Adeyemi => Start of log, Next tick is been printed, I came after now, Now is the time, Set timeout is called
// Babaola => Start of log, I came after now, Next tick is been printed, Now is the time, Set timeout is called

// Assignment
// What is the difference between setImmediate and setTimeout