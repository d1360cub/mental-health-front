/* eslint-disable jest/no-identical-title */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

test('render link', () => {
  render(<Header />, { wrapper: MemoryRouter });
  // eslint-disable-next-line jest/valid-expect
  expect(screen.queryAllByText('navigation'));
});
test('renders text', () => {
  render(<Header />, { wrapper: MemoryRouter });
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});
test('renders text', () => {
  render(<Header />, { wrapper: MemoryRouter });
  expect(screen.getByText(/Users/i)).toBeInTheDocument();
});
test('renders text', () => {
  render(<Header />, { wrapper: MemoryRouter });
  expect(screen.getByText(/Doctors/i)).toBeInTheDocument();
});
