const TodoService = require('../services/TodoService');

module.exports = class FrontendTodoController {
  static async getAllTodos(request, response) {
    try {
      let allTodos = await TodoService.getAllTodos();
      response.render('index', { todos: allTodos });
    } catch (error) {
      response.status(500).json({
        code: 'FAILED',
        success: null,
        error: error.message || 'Oops you cannot list all todos at the moment'
      });
    }
  }

  static async getTodoById(request, response) {
    try {
      let foundTodo = await TodoService.getTodoById(request.params.id);

      response.status(200).json({ code: 'SUCCESS', success: foundTodo, error: null });
    } catch (error) {
      response
        .status(500)
        .json({ code: 'FAILED', success: null, error: error.message || 'Oops you cannot create todo at the moment' });
    }
  }

  static async deleteTodoById(request, response) {
    try {
      let deletedTodo = await TodoService.deleteTodoById(request.params.id);

      response.status(200).json({ code: 'SUCCESS', success: deletedTodo, error: null });
    } catch (error) {
      response
        .status(500)
        .json({ code: 'FAILED', success: null, error: error.message || 'Oops you cannot create todo at the moment' });
    }
  }
};
