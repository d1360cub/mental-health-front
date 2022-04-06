const API_URL = 'http://localhost:8080/api';

const newDoctor = async (newDoctorRegister) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newDoctorRegister),
  };
  try {
    const response = await fetch(`${API_URL}/users`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default newDoctor;

export const getDoctors = async (query = {}) => {
  try {
    const queryString = new URLSearchParams(query).toString();
    const response = await fetch(`${API_URL}/users${queryString}`);
    const people = await response.json();
    return people;
  } catch (error) {
    throw new Error(error);
  }
};
