const { v4: uuidv4 } = require('uuid');
const Todo = require('../models/Todo');

module.exports = class TodoService {
  /**
   *
   * @param {string} description The description of the Todo
   * @param {number} priority Specify its priority
   */
  static async createTodo(description, priority) {
    let newTodo = new Todo({
      uniqueId: uuidv4(),
      description,
      isCompleted: false,
      priority
    });

    return newTodo.save();
  }

  /**
   *
   * @description Returns all todos created on the system
   */
  static async getAllTodos() {
    return Todo.find().sort({ description: 1 });
  }

  /**
   *
   * @description Returns a specific todo by its unique id
   * @param {string} id means Todo unique id
   */
  static async getTodoById(id) {
    return Todo.findOne({ uniqueId: id });
  }
  
  static async getTodoByProperty(property) {
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
