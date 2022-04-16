const API_URL = process.env.REACT_APP_API_URL;

const newTask = async (newTaskRegister) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
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
export default newTask;

export const getTasks = async (query = {}) => {
  try {
    const queryString = new URLSearchParams(query).toString();
    const response = await fetch(`${API_URL}/api/tasks?${queryString}`);
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
