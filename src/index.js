import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import store from './store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const stripePromise = loadStripe('pk_test_51Kqm2wBw2fwyvE4HnnMFKbcep02MaLd6NXZqRyEt914zrkvw4FzdBY5HHQm1m0tBCgMbBSBub27gILUWK0UpE9Cp00SAF0LDIT');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
