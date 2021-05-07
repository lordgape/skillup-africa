const express = require('express');
const routes = require('./routes');
const multer = require('multer');
const bodyParser = require('body-parser'); // queryString or qs
const middleware = require('./middleware');
const mongoose = require('mongoose');
require('dotenv').config();
const configs = require('./configs/configs');

const app = express();

middleware(app);
routes(app);

// Connect to database

mongoose
  .connect(configs.mongodbURl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(`Awesome we are connected to our DB!`);
  })
  .catch((err) => {
    console.log('oops fail to connect to db', err.message);
  });

// Read about .env in node and the various way of loading it.

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is lisening on port ${PORT}`);
});
