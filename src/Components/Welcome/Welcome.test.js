/* eslint-disable jest/no-identical-title */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Welcome from './index';

test('renders text Bienvenido', () => {
  render(<Welcome />, { wrapper: MemoryRouter });
  expect(screen.getByText(/Bienvenid@/i)).toBeInTheDocument();
});
test('renders text for role patient', () => {
  const information = {
    firstName: 'alexander',
    lastName: 'suarez',
    role: 'doctor',
  };
  render(<Welcome information={information} />, { wrapper: MemoryRouter });
  expect(screen.getByText(/dr/i)).toBeInTheDocument();
  expect(screen.getByText(/Tus proximas citas son :/i)).toBeInTheDocument();
});
test('renders text DR', () => {
  const information = {
    firstName: 'alexander',
    lastName: 'suarez',
    role: 'patient',
  };
  render(<Welcome information={information} />, { wrapper: MemoryRouter });
  expect(screen.getByText(/Tu proxima cita es con :/i)).toBeInTheDocument();
});
test('renders text a name of when login', () => {
  const information = {
    fullName: 'alexander suarez',
    role: 'patient',
  };
  render(<Welcome information={information} />, { wrapper: MemoryRouter });
  const divElement = screen.getByRole('viewFullName');
  expect(divElement).toHaveTextContent(`${information.fullName}`);
});
