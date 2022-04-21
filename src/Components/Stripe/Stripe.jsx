import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51Kqm2wBw2fwyvE4HnnMFKbcep02MaLd6NXZqRyEt914zrkvw4FzdBY5HHQm1m0tBCgMbBSBub27gILUWK0UpE9Cp00SAF0LDIT');

function Promise() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default Promise;
