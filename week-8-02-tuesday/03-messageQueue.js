const bar = () => {
  doWork();
  console.log("bar");
};

const baz = () => console.log("baz");

const doWork = () => {
  setTimeout(() => {
    console.log("Hello World")
  });
};

const foo = () => {
  console.log("foo");
  setTimeout(bar, 0);
  baz();
};

foo();

// Event Loop - manager for
//Call  stack [] - message queue []

// TODO guess order of print out - foo, baz, bar, Helloworld

// Asynchronous code

// Event Loop 3
