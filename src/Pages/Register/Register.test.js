import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';

import Register from './Register';

test('render a form', () => {
  render(<Provider store={store}><BrowserRouter><Register /></BrowserRouter></Provider>);
  screen.getByRole('textbox', { name: /nombre/i });
  expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
  screen.getByRole('textbox', { name: /apellido/i });
  expect(screen.getByLabelText('Apellido')).toBeInTheDocument();
  screen.getByRole('textbox', { name: /celular/i });
  expect(screen.getByLabelText('Celular')).toBeInTheDocument();
  screen.getByRole('textbox', { name: /email/i });
  expect(screen.getByLabelText('Email')).toBeInTheDocument();
  screen.getByRole('button', { name: /¿doctor?/i });
  screen.getByRole('link', { name: /inicia sesión/i });
  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(2);
});
