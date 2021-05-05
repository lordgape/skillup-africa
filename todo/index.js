const express = require('express');
const routes = require('./routes');
const multer = require("multer");
const bodyParser = require("body-parser") // queryString or qs
const middleware = require("./middleware")

const app = express();

middleware(app);
routes(app);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is lisening on port ${PORT}`);
});
