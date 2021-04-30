// Start with browser event

const events = require("events");
const eventEmitter = new events();

eventEmitter.on("start", () => {
    console.log(`I was triggered`);
})

eventEmitter.emit("start");