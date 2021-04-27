const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hi!')
})

  app.listen(3000, () => console.log('Server ready'))

  console.log(process.pid);

  // process.exit(1);
// const server = app.listen(3000, () => console.log('Server ready'))

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})