import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import checkout from '../../services/checkout';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    checkout(error, paymentMethod, localStorage.getItem('token'));
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
