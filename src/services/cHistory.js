const API_URL = process.env.REACT_APP_API_URL;

export const getCHistoryPatient = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/clinicHistorys/chistpat/${id}`);
    const services = await response.json();
    return services;
  } catch (error) {
    throw new Error(error);
  }
};

export const newCHistoryPatient = async (newHistoryP, token) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(newHistoryP),
  };
  try {
    const response = await fetch(`${API_URL}/api/clinicHistorys`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
