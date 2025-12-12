import { useDroppable } from '@dnd-kit/core';

export function Droppable({ id, children }) {
  const { isOver, setNodeRef } = useDroppable({ id });
  const style = isOver ? { border: '2px dashed #3B82F6' } : undefined;

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}