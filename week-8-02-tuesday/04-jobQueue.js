const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve))
  baz()
  setTimeout(bar, 0)
}

foo()

// Event Loop - manager for
//Call  stack [] - message queue [bar], Job queue [promise]

// TODO guess order of print out -foo,baz,bar,should be right after baz, before bar


// Asynchronous code