import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import todoRoutes from './routes/todo.js';

dotenv.config();
const app = express();
app.use(cors({
    origin: "http://localhost:5173", // React frontend port
    credentials: true
  }));
  app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
