const express = require('express');
const router = express.Router();
const { createTodo, displayTodo, updateTodo, deleteTodo } = require('../Controllers/C_todo');

router.post('/createTodo', createTodo);
router.get('/displayTodo', displayTodo);
router.put('/updateTodo/:id', updateTodo);
router.delete('/deleteTodo/:_id', deleteTodo);


module.exports = router;