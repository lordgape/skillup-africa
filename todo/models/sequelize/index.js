const Sequelize = require('sequelize');
const configs = require('../../configs/configs.json');
const Todo = require('./Todo');

const sequelizeInstance = new Sequelize(configs.mysql.options);

// Test Connection
sequelizeInstance
  .authenticate()
  .then(() => console.log(`..... I'm inside the DB!`))
  .catch((error) => console.log(err.message || 'oops! mysl failed'));

let db = { Todo: Todo(sequelizeInstance, Sequelize.DataTypes) };

console.log('I got here');

module.exports = db;
