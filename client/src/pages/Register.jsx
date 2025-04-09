import { useState } from 'react';
import { register } from '../services/api';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      alert('Registration successful');
    } catch (err) {
      alert('Error registering');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4  text-center">To Do Application</h2>
          <h2 className="text-xl font-bold mb-4  text-center">Register</h2>
        </div>
        <input name="username" placeholder="Username" onChange={handleChange} className="mb-2 p-2 w-full border rounded" required />
        <input name="email" placeholder="Email" onChange={handleChange} className="mb-2 p-2 w-full border rounded" required />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} className="mb-4 p-2 w-full border rounded" required />
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Register</button>
      </form>
    </div>
  );
}
