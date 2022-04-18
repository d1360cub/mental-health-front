import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/index';

import DoctorSignup from './DoctorSignup';

test('renders a form', () => {
  render(<Provider store={store}><BrowserRouter><DoctorSignup /></BrowserRouter></Provider>);
  screen.getByRole('textbox', { name: /formación académica/i });
  expect(screen.getByLabelText('Formación académica')).toBeInTheDocument();
  screen.getByRole('textbox', { name: /areas de atención/i });
  expect(screen.getByLabelText('Areas de atención')).toBeInTheDocument();
  screen.getByText(/descripción/i);
  expect(screen.getByLabelText('Descripción de servicios profesionales')).toBeInTheDocument();
  screen.getByText(/experiencia/i);
  // expect(screen.getByLabelText('Experiencia profesional')).toBeInTheDocument();
  screen.getByRole('button', { name: /regístrate/i });
  const button = screen.getAllByRole('button');
  expect(button).toHaveLength(1);
});
