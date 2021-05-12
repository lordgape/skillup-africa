const { v4: uuidv4 } = require('uuid');
// const Todo = require('../models/mongoose/Todo');
const Model = require('../models/sequelize');

module.exports = class TodoService {
  /**
   *
   * @param {string} description The description of the Todo
   * @param {number} priority Specify its priority
   */
  static async createTodo(description, priority) {
    // let newTodo = new Todo({
    //   uniqueId: uuidv4(),
    //   description,
    //   isCompleted: false,
    //   priority
    // });

    // return newTodo.save();

    let newTodo = Model.Todo.create({
      uniqueid: uuidv4(),
      description,
      iscompleted: false,
    });

    return newTodo;

  }

  /**
   *
   * @description Returns all todos created on the system
   */
  static async getAllTodos() {
    // return Todo.find().sort({ description: 1 });

    return Model.Todo.findAll();
  }

  /**
   *
   * @description Returns a specific todo by its unique id
   * @param {string} id means Todo unique id
   */
  static async getTodoById(id) {
    return Todo.findOne({ uniqueId: id });
  }

  /**
   *
   * @description Delete a specific todo by its unique id
   * @param {string} id means Todo unique id
   */
  static async deleteTodoById(id) {
    return Todo.findOneAndRemove({ uniqueId: id, useFindModidy:true });
  }
};

// job queue
