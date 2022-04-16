const API_URL = process.env.REACT_APP_API_URL;

const getCHistoryPatient = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/clinicHistorys/chistpat/${id}`);
    const services = await response.json();
    return services;
  } catch (error) {
    throw new Error(error);
  }
};

export default getCHistoryPatient;
