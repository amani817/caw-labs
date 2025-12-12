
import TaskCard from './TaskCard';

export default function Column({ id, name, color, tasks, onUpdate, onDelete }) {
  return (
    <Droppable id={id}>
      <div className="bg-gray-200 rounded-lg p-4">
        <h2 className="font-bold mb-4" style={{ color }}>{name} ({tasks.length})</h2>
        <div className="space-y-3">
          {tasks.map(task => (
            <Draggable key={task.id} id={task.id}>
              <TaskCard task={task} onUpdate={onUpdate} onDelete={onDelete} />
            </Draggable>
          ))}
        </div>
      </div>
    </Droppable>
  );
}