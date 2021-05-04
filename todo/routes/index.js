const userRoute = require('./userRoutes');

module.exports = (app) => {
  app.use('/health', (req, res) => {
    res.send("I'm in a good working condition");
  });

  app.use('/users', userRoute);

  app.get('/', (req, res) => {
    console.log(`I go here`);
    res.send('This is the root call');
  });
};



// Route
// middleware use function with route pattern and handler
// http verb of the express function
// middleware use function with route pattern and exported router module


// User Module
// Post Module

// /users => all user
// /users/:id => particular user /users/ade

// /posts => all user
// /posts/:id => particular post
