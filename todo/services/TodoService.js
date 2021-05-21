const { v4: uuidv4 } = require('uuid');
// const Todo = require('../models/mongoose/Todo');
const Model = require('../models/sequelize');
const TodoValidation = require('../validation/TodoValidation');

// Todo 1: Write a custom validator that uses only javascript to validate this application need.
// Todo 2: Complete other validation of the TodoService using validtor package or other third party solution.
// Todo 3: Validate the user is sending property description

module.exports = class TodoService {
  /**
   *
   * @param {string} description The description of the Todo
   * @param {number} priority Specify its priority
   */
  static async createTodo(description, priority) {
    const { error, isValid } = await TodoValidation.todoCreation(description);

    if (!isValid) {
      throw new Error(error.description);
    }

    // Sequelize
    let newTodo = Model.Todo.create({
      uniqueid: uuidv4(),
      description,
      iscompleted: false
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
    return Todo.findOneAndRemove({ uniqueId: id, useFindModidy: true });
  }
};

// job queue
