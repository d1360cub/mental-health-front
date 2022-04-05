const API_URL = 'http://localhost:8080/api';

export const newUser = async (newRegister) => {
  try {
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRegister),
    };
    console.log('🚀 ~ file: user.js ~ line 12 ~ newUser ~ payload', payload);
    const response = await fetch(`${API_URL}/user`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const listAllUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/user`);
    const persons = await response.json();
    return persons;
  } catch (error) {
    throw new Error(error);
  }
};

export const getUser = async (id) => {
  try {
    const response = await fetch(`${API_URL}/user/${id}`);
    const people = await response.json();
    return people;
  } catch (error) {
    throw new Error(error);
  }
};
