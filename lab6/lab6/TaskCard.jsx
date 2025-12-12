import { useState } from 'react';

export default function TaskCard({ task, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || '');

  const handleSave = () => {
    onUpdate(task.id, { title, description });
    setEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      {editing ? (
        <div className="space-y-2">
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border p-2" />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border p-2" rows="3" />
          <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        </div>
      ) : (
        <>
          <h3 className="font-bold">{task.title}</h3>
          <p>{description || 'No description'}</p>
          <p>Category: {task.status}</p>
          <button onClick={() => setEditing(true)} className="text-blue-600">Edit</button>
          <button onClick={() => onDelete(task.id)} className="text-red-600 ml-4">Delete</button>
        </>
      )}
    </div>
    
  );
}