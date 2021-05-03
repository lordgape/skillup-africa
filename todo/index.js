const express = require('express');
const routes = require('./routes');

const app = express();

// routes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is lisening on port ${PORT}`);
});
