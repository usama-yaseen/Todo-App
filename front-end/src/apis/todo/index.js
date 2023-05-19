import axios from 'axios';
import { apiURL } from '../../utils/constants/URLs';

export const getTodosApi = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get(`${apiURL}/api/todo`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createTodoApi = async task => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.post(`${apiURL}/api/todo`, task, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const markTodoAsCompletedApi = async todoId => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.put(
      `${apiURL}/api/todo/markComplete/${todoId}`,
      null,
      {
        headers: {
          Authorization: `${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const markTodoAsIncompleteApi = async todoId => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.put(
      `${apiURL}/api/todo/markIncomplete/${todoId}`,
      null,
      {
        headers: {
          Authorization: `${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteTodoApi = async todoId => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.delete(`${apiURL}/api/todo/${todoId}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
