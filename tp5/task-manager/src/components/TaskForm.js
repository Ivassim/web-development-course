import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!taskText.trim()) {
      return;
    }

    onAddTask(taskText);
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;