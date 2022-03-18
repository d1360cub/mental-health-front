const API_URL = 'http://localhost:8080/api';

const newUser = async (newRegister) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newRegister),
  };
  try {
    const response = await fetch(`${API_URL}/user`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default newUser;
