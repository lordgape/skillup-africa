// Start with browser event

const events = require("events");
const eventEmitter = new events();

eventEmitter.on("start", (data) => {
    console.log(`I was triggered ${data}`);
})


eventEmitter.emit("start", "I just started");