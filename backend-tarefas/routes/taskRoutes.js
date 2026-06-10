const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.listTasks);
router.get('/:id', taskController.getTaskById);
router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.patch('/:id/toggle', taskController.toggleTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
