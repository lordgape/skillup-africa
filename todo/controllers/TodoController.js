const TodoService = require('../services/TodoService');

module.exports = class TodoController {
  static async createTodo(request, response) {
    try {
      let newTodo = await TodoService.createTodo(request.body.description);

      response.status(201).json({ code: 'SUCCESS', success: newTodo, error: null });
    } catch (error) {
      response
        .status(500)
        .json({ code: 'FAILED', success: null, error: error.message || 'Oops you cannot create todo at the moment' });
    }
  }
  
  static async getAllTodos(request, response) {
    try {
      let allTodos = await TodoService.getAllTodos();

      response.status(201).json({ code: 'SUCCESS', success: allTodos, error: null });
    } catch (error) {
      response
        .status(500)
        .json({ code: 'FAILED', success: null, error: error.message || 'Oops you cannot list all todos at the moment' });
    }
  }
};
