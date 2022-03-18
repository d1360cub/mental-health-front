const API_URL = 'http://localhost:8080/api';

const getDoctors = async () => {
  try {
    const response = await fetch(`${API_URL}/doctors`);
    const people = await response.json();
    return people;
  } catch (error) {
    throw new Error(error);
  }
};

export default getDoctors;
