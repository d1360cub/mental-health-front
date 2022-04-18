import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';

import CardViewer from './index';

test('renders date who date of start', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CardViewer />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByText(/Fecha de inicio:/i)).toBeInTheDocument();
});
