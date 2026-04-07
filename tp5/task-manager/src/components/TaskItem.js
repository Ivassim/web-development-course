function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button type="button" onClick={() => onDeleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;