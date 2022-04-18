import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';

import Login from './Login';

test('render a form', () => {
  render(<Provider store={store}><BrowserRouter><Login /></BrowserRouter></Provider>);
  const inputCorreo = screen.getByLabelText('Email *');
  expect(screen.getByText(/regístrate/i)).toBeInTheDocument();
  expect(inputCorreo).toBeInTheDocument();
  screen.getByRole('textbox', { name: 'Email *' });
  expect(screen.getByPlaceholderText(/correo/i)).toBeInTheDocument();
  expect(screen.getByLabelText('Contraseña *')).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/contraseña/i)).toBeInTheDocument();
  screen.getByRole('button', { name: /mostrar contraseña/i });
  screen.getByRole('link', { name: /regístrate/i });
  screen.getByRole('link', { name: /olvidaste/i });
  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(2);
});
