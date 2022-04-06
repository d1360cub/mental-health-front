const API_URL = process.env.REACT_APP_API_URL;

const getAllServices = async () => {
  try {
    const response = await fetch(`${API_URL}/api/services`);
    const services = await response.json();
    return services;
  } catch (error) {
    throw new Error(error);
  }
};

export default getAllServices;
