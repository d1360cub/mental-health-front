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
