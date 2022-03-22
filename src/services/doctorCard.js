const API_URL = 'http://localhost:8080/api';

const getDoctors = async (query = {}) => {
  try {
    const queryString = new URLSearchParams(query).toString();
    const response = await fetch(`${API_URL}/doctors?${queryString}`);
    const people = await response.json();
    return people;
  } catch (error) {
    throw new Error(error);
  }
};

export default getDoctors;
