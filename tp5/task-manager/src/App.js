import './App.css';
import { useRef, useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterPanel from './components/FilterPanel';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const nextTaskId = useRef(1);

  const handleAddTask = (taskText) => {
    const trimmedText = taskText.trim();

    if (!trimmedText) {
      return;
    }

    const newTask = {
      id: nextTaskId.current,
      text: trimmedText,
      completed: false,
    };

    nextTaskId.current += 1;
    setTasks((previousTasks) => [...previousTasks, newTask]);
  };

  const handleToggleTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') {
      return !task.completed;
    }

    if (filter === 'completed') {
      return task.completed;
    }

    return true;
  });

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const remainingTasks = totalTasks - completedTasks;

  return (
    <div className="App">
      <Header />
      <TaskForm onAddTask={handleAddTask} />
      <FilterPanel currentFilter={filter} onFilterChange={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
      <div>
      <p>Total tasks: {totalTasks}</p>
      <p>Completed tasks: {completedTasks}</p>
      <p>Remaining tasks: {remainingTasks}</p>
      </div>
    </div>
  );
}

export default App;