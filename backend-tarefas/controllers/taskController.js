const Task = require('../models/Task');

exports.listTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar tarefas.', error: error.message });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada.' });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar tarefa.', error: error.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate, priority, completed } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({ message: 'O título da tarefa é obrigatório.' });
    }

    const task = await Task.create({
      title: title.trim(),
      description,
      dueDate,
      priority,
      completed
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao cadastrar tarefa.', error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada.' });
    }

    res.json(task);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar tarefa.', error: error.message });
  }
};

exports.toggleTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada.' });
    }

    task.completed = !task.completed;
    await task.save();

    res.json(task);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao alterar status da tarefa.', error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada.' });
    }

    res.json({ message: 'Tarefa removida com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir tarefa.', error: error.message });
  }
};
