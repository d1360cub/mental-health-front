/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import checkout from '../../services/checkout';
import { createAppointmet } from '../../services/appointments';
import { resetState } from '../../store/actions';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const preAppointment = useSelector((state) => state.preAppointment);
  const patientId = user._id;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    const payment = await checkout(error, paymentMethod, localStorage.getItem('token'), preAppointment);
    const appointmentConfirm = preAppointment;
    appointmentConfirm.patientId = `${patientId}`;
    if (payment.status) {
      createAppointmet(appointmentConfirm, localStorage.getItem('token'));
      dispatch(resetState());
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" className="btn-appointment">Realizar pago</button>
      </form>
    </div>
  );
}

export default CheckoutForm;
