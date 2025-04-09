import { useState } from 'react';
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form);
      localStorage.setItem('token', res.data.token);
      navigate('/todos');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input name="email" placeholder="Email" onChange={handleChange} className="mb-2 p-2 w-full border rounded" required />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} className="mb-4 p-2 w-full border rounded" required />
        <button className="bg-green-500 text-white px-4 py-2 rounded w-full">Login</button>
      </form>
    </div>
  );
}