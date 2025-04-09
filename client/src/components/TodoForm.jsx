import { useState, useEffect } from 'react';

export default function TodoForm({ onSubmit, initialData }) {
  const [form, setForm] = useState({ title: '', description: '', dueDate: '', category: 'non-urgent' });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ title: '', description: '', dueDate: '', category: 'non-urgent' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="mb-2 p-2 w-full border rounded" required />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="mb-2 p-2 w-full border rounded" />
      <input name="dueDate" type="date" value={form.dueDate} onChange={handleChange} className="mb-2 p-2 w-full border rounded" />
      <select name="category" value={form.category} onChange={handleChange} className="mb-2 p-2 w-full border rounded">
        <option value="urgent">Urgent</option>
        <option value="non-urgent">Non-Urgent</option>
      </select>
      <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Save</button>
    </form>
  );
}
