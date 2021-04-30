const events = require("events");
const eventEmitter = new events();

eventEmitter.on("start", (date) => {
  console.log(`I was clicked - ${date}`);
});

eventEmitter.emit("start", new Date());

console.log(`End`);
