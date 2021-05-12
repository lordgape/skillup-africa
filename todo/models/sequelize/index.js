const Sequelize = require('sequelize');
const configs = require('../../configs/configs.json');
const Todo = require('./Todo');

const sequelize = new Sequelize(configs.mysql.options);

// Test Connection
sequelize
  .authenticate()
  .then(() => console.log(`..... I'm inside the DB!`))
  .catch((error) => console.log(err.message || 'oops! mysl failed'));

let db = {};

db['Todo'] = Todo(sequelize, Sequelize.DataTypes);

module.exports = db;
