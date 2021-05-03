const Stream = require('stream')
const writableStream = new Stream.Writable()

writableStream._write = (chunk, encoding, next) => {
    console.log(chunk)
    console.log(chunk.toString())
    console.log("local response >> " + chunk.toString())
    next()
  }

process.stdin.pipe(writableStream)


// listener for event

// Stream -> Continuous flow of data/byte
// All stream is of instance eventEmitter 
// Stream can be of two kind 
// 1- ReadableStream ( create an eventEmitter that accept data from a source (File, httpclient, keyboard)) 
// 2- WriteableStream ( create an eventEmitter that flush out data to a source (Terminal, File, httpclient) )
 