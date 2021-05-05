const router = require('express').Router();
const TodoController = require('../controllers/TodoController');

/**
 * List all todos
 */
router.get('/', (req, res) => {
  res.json({ code: 'SUCCESS', success: todosDB, error: null });
});

/**
 * Create a Todo - unique id, description, isCompleted // application/json
 * api /todos/
 */
router.post('/', (req, res) => {
  TodoController.createTodo(req, res);
});

/**
 *  Get a Todo by unique id
 */
router.get('/:id', (req, res) => {
  let todoId = req.params.id;

  let foundTodo = todosDB.find((todo) => todo.uniqueId == todoId);

  res.json({ code: 'SUCCESS', success: foundTodo, error: null });

  // TODO return a proper response to the user when no todo is found.
});

router.delete('/:id', (req, res) => {
  // TODO Implement this route
  res.send('todo deleted');
});

module.exports = router;

// Controller and Service =>
