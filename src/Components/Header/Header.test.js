/* eslint-disable jest/no-identical-title */
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';

import Header from './Header';

test('render link', () => {
  render(<Provider store={store}><BrowserRouter><Header /></BrowserRouter></Provider>);
  // eslint-disable-next-line jest/valid-expect
  expect(screen.queryAllByText('navigation'));
  expect(screen.getByText(/Inicio/i)).toBeInTheDocument();
  expect(screen.getByText(/Usuarios/i)).toBeInTheDocument();
  expect(screen.getByText(/Doctores/i)).toBeInTheDocument();
});
