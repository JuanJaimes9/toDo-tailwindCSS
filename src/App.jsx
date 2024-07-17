import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTaskText) {
    const newTask = {
      id: tasks.length + 1, // Generar un id único (este ejemplo asume números consecutivos)
      text: newTaskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  function removeTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function toggleTaskStatus(id) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  }

  function editTask(id, newText) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(newTasks);
  }

  return (
    <>
      <div className="bg-gray-500 w-3/4 h-fit max-h-svh flex flex-col justify-center items-center mx-auto mt-20 rounded-md">
        <div>
          <h1 className="text-4xl font-bold text-center my-8 text-white">
            ToDo with TailwindCSS ✨
          </h1>
        </div>
        <div className="bg-slate-700 p-2 rounded-md mt-3 w-3/4 mb-3">
          <TaskForm onAddTask={addTask} />
        </div>
        <div className={` ${tasks.length >= 1 ? 'bg-sky-950 w-3/4 rounded-md mb-5 p-5' : ''}`}>
        <TaskList
            tasks={tasks}
            onRemoveTask={removeTask}
            toggleTaskStatus={toggleTaskStatus}
            onEditTask={editTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;

