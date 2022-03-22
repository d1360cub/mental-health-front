const API_URL = 'http://localhost:8080/api';

const getAllServices = async () => {
  try {
    const response = await fetch(`${API_URL}/services`);
    const services = await response.json();
    return services;
  } catch (error) {
    throw new Error(error);
  }
};

export default getAllServices;
