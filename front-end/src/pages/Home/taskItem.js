import React from 'react';
import { FaCheckCircle, FaTrash, FaRegCheckCircle } from 'react-icons/fa';
import './styles.css';
import { RxDragHandleDots2 } from 'react-icons/rx';

export const TaskItem = props => {
  const {
    task,
    deleteTask,
    toggleTaskCompletion,
    toggleOptions,
    selectedTask,
  } = props;
  return (
    <div key={task._id} className="task-container">
      <div className="task-content">
        {task.completed ? (
          <FaCheckCircle
            className="standard-icon right-icon completed"
            onClick={() => toggleTaskCompletion(task._id, true)}
          />
        ) : (
          <FaRegCheckCircle
            className="standard-icon right-icon"
            onClick={() => toggleTaskCompletion(task._id, false)}
          />
        )}
        <p>{task.task}</p>
      </div>
      <div className="task-actions">
        <RxDragHandleDots2
          className="standard-icon"
          onClick={() => toggleOptions(task._id)}
        />
        {selectedTask === task._id && (
          <div className="task-dropdown">
            <button onClick={() => deleteTask(task._id)}>
              <FaTrash className="standard-icon right-icon" />
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
