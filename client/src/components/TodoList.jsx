export default function TodoList({ todos, onEdit, onDelete, onToggle }) {
    return (
      <div>
        {todos.map((todo) => (
          <div key={todo._id} className="p-4 border rounded mb-2 bg-white">
            <div className="flex justify-between items-center">
              <h3 className={`font-bold ${todo.completed ? 'line-through text-gray-400' : ''}`}>{todo.title}</h3>
              <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo._id)} />
            </div>
            <p>{todo.description}</p>
            <p className="text-sm text-gray-500">Due: {todo.dueDate?.substring(0, 10)}</p>
            <p className="text-sm text-gray-500">Category: {todo.category}</p>
            <div className="mt-2 flex gap-2">
              <button onClick={() => onEdit(todo)} className="px-3 py-1 bg-yellow-500 text-white rounded">Edit</button>
              <button onClick={() => onDelete(todo._id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  }