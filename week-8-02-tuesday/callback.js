const phone  = (number) => {
    console.log(`Ring....`);
    console.log(`Ring....`);
}

const call = (callback) => {
    callback();
}

const ringOutFunc = () => {
    console.log(`I'm ringing out loud`);
}

const vibrateFunction = () => {
    console.log(`I'm Vibrating`);
}

call(vibrateFunction)
call(ringOutFunc)