import { useState } from 'react';
import PropTypes from 'prop-types';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

function TaskList({ tasks, onRemoveTask, toggleTaskStatus, onEditTask }) {
  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState(null);

  function handleEditStart(id, text) {
    setEditText(text);
    setEditId(id);
  }

  function handleEditCancel() {
    setEditText('');
    setEditId(null);
  }

  function handleEditSubmit(id) {
    onEditTask(id, editText);
    setEditText('');
    setEditId(null);
  }

  return (
    <div className='m-3'>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`rounded-sm px-3 py-2 m-1 flex items-center justify-between ${
              task.completed ? 'bg-green-400' : 'bg-slate-200'
            }`}
          >
            {editId === task.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="px-2 py-1 w-3/4 rounded-sm"
                />
                <button
                  className='text-white font-medium bg-green-400 p-2 rounded-md ml-2 '
                  onClick={() => handleEditSubmit(task.id)}
                >
                  Update
                </button>
                <button
                  className='text-white font-medium bg-red-400 p-2 rounded-md ml-2'
                  onClick={handleEditCancel}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                {task.text}
                <div className='flex gap-2'>
                  <div className='hover:scale-150 transition-transform duration-300'>
                    <DoneIcon color='success' onClick={() => toggleTaskStatus(task.id)} />
                  </div>
                  <div className='hover:scale-150 transition-transform duration-300'>
                    <EditIcon color='info' onClick={() => handleEditStart(task.id, task.text)} />
                  </div>
                  <div className='hover:scale-150 transition-transform duration-300'>
                    <ClearIcon color='error' onClick={() => onRemoveTask(task.id)} />
                  </div>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onRemoveTask: PropTypes.func.isRequired,
  toggleTaskStatus: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
};

export default TaskList;
