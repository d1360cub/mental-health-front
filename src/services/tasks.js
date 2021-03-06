/* eslint-disable default-param-last */
/* eslint-disable no-underscore-dangle */
const API_URL = process.env.REACT_APP_API_URL;

export const newTask = async (newTaskRegister, token) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(newTaskRegister),
  };
  try {
    const response = await fetch(`${API_URL}/api/tasks`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getTasks = async (token) => {
  const payload = {
    headers: {
      'Content-type': 'application/json',
      authorization: `bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${API_URL}/api/tasks`, payload);
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    throw new Error(error);
  }
};

export const getTask = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/tasks?${id}`);
    const task = await response.json();
    return task;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateTask = async (taskUpdate, token) => {
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(taskUpdate),
  };
  try {
    const response = await fetch(`${API_URL}/api/tasks/${taskUpdate._id}`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
