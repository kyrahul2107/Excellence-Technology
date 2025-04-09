import Todo from '../models/Todo.js';

export const getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.userId });
  res.json(todos);
};

export const createTodo = async (req, res) => {
  const newTodo = await Todo.create({ ...req.body, user: req.userId });
  res.status(201).json(newTodo);
};

export const updateTodo = async (req, res) => {
  const updated = await Todo.findOneAndUpdate(
    { _id: req.params.id, user: req.userId },
    req.body,
    { new: true }
  );
  res.json(updated);
};

export const deleteTodo = async (req, res) => {
  await Todo.findOneAndDelete({ _id: req.params.id, user: req.userId });
  res.json({ message: 'Deleted successfully' });
};
