const API_URL = process.env.REACT_APP_API_URL;

const checkout = async (error, paymentMethod, token, preAppointment) => {
  try {
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${token}`,
      },
      body: JSON.stringify({ paymentMethod, amount: 5_000, preAppointment }),
    };
    const response = await fetch(`${API_URL}/api/checkout`, payload);
    const body = await response.json();
    return body;
  } catch {
    throw new Error(error);
  }
};

export default checkout;
