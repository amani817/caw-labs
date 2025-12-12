import { useState } from 'react';
import { Plus, Trash2, Edit2 } from 'lucide-react';
import TaskForm from './components/TaskForm';
import './styles.css'; // ← importe tes styles personnalisés

const statuses = ['todo', 'inprogress', 'done'];
const statusLabels = {
  todo: 'To Do',
  inprogress: 'In Progress',
  done: 'Done'
};

const TaskCard = ({ task, onDelete, onMove, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDesc, setEditDesc] = useState(task.description || '');

  const handleSave = () => {
    onEdit(task.id, editTitle, editDesc);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 border border-gray-200 hover:shadow-lg transition-shadow">
      {isEditing ? (
        <div className="space-y-3">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <textarea
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="2"
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 text-sm"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <h3 className="font-semibold text-gray-800 mb-2">{task.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{task.description || 'No description'}</p>
          <div className="flex items-center justify-between">
            <select
              value={task.status}
              onChange={(e) => onMove(task.id, e.target.value)}
              className="px-3 py-1 text-sm border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              {statuses.map(s => (
                <option key={s} value={s}>{statusLabels[s]}</option>
              ))}
            </select>
            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                title="Edit"
              >
                <Edit2 size={16} />
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                title="Delete"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Column = ({ title, tasks, onAdd, onDelete, onMove, onEdit }) => {
  return (
    <div className="bg-gray-100 rounded-xl p-6 min-h-96 flex flex-col">
      <h2 className="font-bold text-xl mb-4 text-gray-700">{title} ({tasks.length})</h2>
      <div className="flex-1 space-y-3 overflow-y-auto">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDelete}
            onMove={onMove}
            onEdit={onEdit}
          />
        ))}
      </div>
      {title === 'To Do' && <TaskForm onAdd={onAdd} />}
    </div>
  );
};

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design database schema", description: "Create the initial database structure", status: "todo" },
    { id: 2, title: "Implement authentication", description: "Add user login and registration", status: "inprogress" },
    { id: 3, title: "Setup project repository", description: "Initialize Git and CI/CD", status: "done" }
  ]);

  const addTask = (title, description) => {
    const newTask = { id: Date.now(), title, description, status: 'todo' };
    setTasks(prev => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const moveTask = (id, newStatus) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  const editTask = (id, title, description) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, title, description } : t));
  };

  const columns = [
    { title: "To Do", status: "todo", tasks: tasks.filter(t => t.status === "todo") },
    { title: "In Progress", status: "inprogress", tasks: tasks.filter(t => t.status === "inprogress") },
    { title: "Done", status: "done", tasks: tasks.filter(t => t.status === "done") }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-3">Kanban Board</h1>
          <p className="text-gray-600 text-lg">Organize your tasks efficiently</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map(col => (
            <Column
              key={col.status}
              title={col.title}
              tasks={col.tasks}
              onAdd={addTask}
              onDelete={deleteTask}
              onMove={moveTask}
              onEdit={editTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}