const bodyParser = require('body-parser');
const path = require('path');
const helmet =  require('helmet');

module.exports = (app) => {
  // TODO add a rate limiter to this application

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  // app.use(helmet());

  // Setup template
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '../app'));
};
