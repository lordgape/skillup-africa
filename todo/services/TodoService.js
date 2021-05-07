const { v4: uuidv4 } = require('uuid');
const Todo = require('../models/Todo');

module.exports = class TodoService {
  /**
   *
   * @param {string} description The description of the Todo
   */
  static async createTodo(description) {
    // let newTodo = new Todo()
    // newTodo.uniqueId = uuidv4()
    // newTodo.description = description

    // newTodo.save()

    let newTodo = new Todo({
      uniqueId: uuidv4(),
      description: description,
      isCompleted: false
    });

    // let newTodo = {
    //   uniqueId: uuidv4(),
    //   description: description,
    //   isCompleted: false
    // }


    return newTodo.save();
  }
  
  /**
   *
   * @description Returns all todos created on the system
   */
  static async getAllTodos() {
    return Todo.find();
  }
};

// job queue
