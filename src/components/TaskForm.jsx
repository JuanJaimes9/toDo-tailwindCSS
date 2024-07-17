import { useState } from "react"
import PropTypes from 'prop-types'

function TaskForm({ onAddTask }) {

    const [task, setTask] = useState('');

    function handlerSubmit(e){
        e.preventDefault();
        if (task.trim() !== ''){
        onAddTask(task)
        setTask('');
        }
    }

    function handlerChange(e){
        setTask(e.target.value);
    }

  return (
    <form 
        onSubmit={handlerSubmit}
        className="w-full flex items-center justify-center gap-3 p-2"
        >
        <input 
            onChange={handlerChange}
            value={task}
            className="w-3/4 rounded-md p-1
            focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-orange-400" 
            type="text" 
            placeholder="Write your task here"/>
        <button 
            className="bg-orange-400 rounded-md m-2 p-2 text-white font-medium hover:scale-110 transition-transform duration-300 " 
            type="submit">
                Add task
        </button>
    </form>
  )
}

TaskForm.propTypes = {
    onAddTask: PropTypes.func.isRequired,
  };
export default TaskForm