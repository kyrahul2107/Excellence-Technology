import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: String,
  category: { type: String, enum: ['urgent', 'non-urgent'], default: 'non-urgent' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model('Todo', todoSchema);
