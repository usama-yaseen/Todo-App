import React, { useState, useEffect } from 'react';
import { FaAngleDown, FaBars, FaPlusCircle } from 'react-icons/fa';
import './styles.css';
import {
  createTodoApi,
  deleteTodoApi,
  getTodosApi,
  markTodoAsCompletedApi,
  markTodoAsIncompleteApi,
} from '../../apis/todo';
import { useNavigate } from 'react-router-dom';
import { TaskItem } from './taskItem';
import { RandomImageURL } from '../../utils/data/Images';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);
  const [isTasksContainerOpen, setIsTasksContainerOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem('token')
      ? fetchTasks()
      : navigate('/login', {
          replace: true,
        });
  }, []);

  useEffect(() => {
    setNewTask('');
  }, [tasks]);

  const toggleOptions = taskId => {
    if (selectedTask === taskId) {
      setSelectedTask(null);
    } else {
      setSelectedTask(taskId);
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await getTodosApi();
      setTasks(response);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async () => {
    if (newTask.trim() === '') {
      return;
    }
    try {
      const response = await createTodoApi({ task: newTask });
      setTasks(prevTasks => [...prevTasks, response]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async taskId => {
    try {
      await deleteTodoApi(taskId);
      setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleInputChange = e => {
    setNewTask(e.target.value);
  };

  const handleAddTask = e => {
    e.preventDefault();
    if (newTask.trim() === '') {
      return;
    }
    addTask();
  };

  const toggleTasksContainer = () => {
    setIsTasksContainerOpen(prevOpen => !prevOpen);
  };

  const toggleTaskCompletion = async (taskId, alreadyChecked) => {
    let response = null;
    if (alreadyChecked) {
      response = await markTodoAsIncompleteApi(taskId);
    } else {
      response = await markTodoAsCompletedApi(taskId);
    }

    setTasks(prevTasks =>
      prevTasks.map(task => {
        if (task._id === taskId) {
          return response;
        }
        return task;
      }),
    );
  };

  return (
    <div className="glassy-box-container tasks-box-container">
      <div className="center-align center data-container">
        <img className="image-circle" src={RandomImageURL} alt="pic" />
      </div>

      <div className="glassy-container">
        {!newTask.length == 0 ? (
          <FaPlusCircle
            className="standard-icon right-icon"
            onClick={handleAddTask}
          />
        ) : (
          <FaBars className="standard-icon right-icon" />
        )}

        <input
          id="task-input"
          type="text"
          placeholder="To Do Today"
          value={newTask}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleAddTask(e);
            } else if (e.key === 'Escape') {
              setNewTask('');
            }
          }}
          onChange={handleInputChange}
        />
        <FaAngleDown
          className={`standard-icon ${isTasksContainerOpen ? 'up' : 'down'}`}
          onClick={toggleTasksContainer}
        />
      </div>

      {isTasksContainerOpen && (
        <div className="glassy-container tasks-container">
          {tasks.length === 0 ? (
            <p>No tasks found.</p>
          ) : (
            tasks.map(task => (
              <TaskItem
                key={task._id}
                task={task}
                deleteTask={deleteTask}
                toggleTaskCompletion={toggleTaskCompletion}
                toggleOptions={toggleOptions}
                selectedTask={selectedTask}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
