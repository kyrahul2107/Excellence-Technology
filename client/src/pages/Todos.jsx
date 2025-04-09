import { useEffect, useState } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo, toggleComplete } from '../services/api';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  useEffect(() => { fetchTodos(); }, []);

  const handleSubmit = async (todo) => {
    if (editing) {
      await updateTodo(editing._id, todo);
      setEditing(null);
    } else {
      await createTodo(todo);
    }
    fetchTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  const handleToggle = async (id) => {
    await toggleComplete(id);
    fetchTodos();
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Todo Manager</h2>
      <TodoForm onSubmit={handleSubmit} initialData={editing} />
      <TodoList todos={todos} onEdit={setEditing} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
}