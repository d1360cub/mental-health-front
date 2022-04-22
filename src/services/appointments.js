const API_URL = process.env.REACT_APP_API_URL;

const getAppointmentsByDoctorId = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/appointments/${id}`);
    const appointmentForId = await response.json();
    return appointmentForId;
  } catch (error) {
    throw new Error(error);
  }
};

export default getAppointmentsByDoctorId;

export const getAppointmentsByPatientId = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/appointments/appointmentPatient/${id}`);
    const appointmentForId = await response.json();
    return appointmentForId;
  } catch (error) {
    throw new Error(error);
  }
};

export const createAppointmet = async (newApointment, token) => {
  try {
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${token}`,
      },
      body: JSON.stringify(newApointment),
    };
    const response = await fetch(`${API_URL}/api/appointments`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
