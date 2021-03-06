/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
const API_URL = process.env.REACT_APP_API_URL;

export const newUser = async (newRegister) => {
  try {
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRegister),
    };
    const response = await fetch(`${API_URL}/api/users`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const listAllUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/api/users`);
    const persons = await response.json();
    return persons;
  } catch (error) {
    throw new Error(error);
  }
};

export const getUser = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/users/${id}`);
    const people = await response.json();
    return people;
  } catch (error) {
    throw new Error(error);
  }
};

export const login = async (user) => {
  try {
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(`${API_URL}/auth/local/login`, payload);
    const data = await response.json();
    localStorage.setItem('token', data.token);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateUser = async (id, body) => {
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  try {
    const response = await fetch(`${API_URL}/api/users/${id}`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteUser = async (id) => {
  const payload = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    const response = await fetch(`${API_URL}/api/users/${id}`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const handleUploadImage = async (file, image) => {
  const formData = new FormData();
  formData.append('file', image);
  const payload = {
    method: 'POST',
    body: formData,
  };
  try {
    const result = await fetch(`${API_URL}/api/upload/image`, payload);
    const data = await result.json();
    const { secure_url } = data;
    return secure_url;
  } catch (error) {
    throw new Error(error);
  }
};
