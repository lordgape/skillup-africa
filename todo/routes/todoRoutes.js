const router = require('express').Router();
const TodoController = require('../controllers/TodoController');

/**
 * @description List all todos -
 * @api /todos
 */
router.get('/', (req, res) => {
  TodoController.getAllTodos(req, res);
});

/**
 * @description Create a Todo - unique id, description, isCompleted // application/json
 * @api /todos
 */
router.post('/', (req, res) => {
  TodoController.createTodo(req, res);
});

/**
 *  @description Get a Todo by unique id
 * @api /todos/:id
 */
router.get('/:id', (req, res) => {
  // TODO return a proper response to the user when no todo is found.
  TodoController.getTodoById(req, res);
});

/**
 * @description Delete a Todo using its unique Id
 * @api /todos/:id
 */
router.delete('/:id', (req, res) => {
  // TODO Implement this route
  TodoController.deleteTodoById(req, res);
});

module.exports = router;

// Controller and Service =>
