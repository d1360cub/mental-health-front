const API_URL = process.env.REACT_APP_API_URL;

const newDoctor = async (newDoctorRegister) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newDoctorRegister),
  };
  try {
    const response = await fetch(`${API_URL}/api/users`, payload);
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
    const response = await fetch(`${API_URL}/api/users?${queryString}`);
    const people = await response.json();
    return people;
  } catch (error) {
    throw new Error(error);
  }
};
