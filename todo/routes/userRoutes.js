const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('You are now on the users domain');
});

router.get('/:id', (req, res) => {});  // parmater route

module.exports = router;
