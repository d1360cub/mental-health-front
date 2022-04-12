/* eslint-disable jest/valid-expect */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import About from './About';

test('renders text', () => {
  render(<About />, { wrapper: MemoryRouter });
  expect(screen.getByText(/contratos/i)).toBeInTheDocument();
});

test('renders h1', () => {
  render(<About />, { wrapper: MemoryRouter });
  expect(screen.getByRole('heading', { level: 1 }));
});

test('renders h3', () => {
  render(<About />, { wrapper: MemoryRouter });
  expect(screen.getByRole('heading', { level: 3 }));
});

test('renders image', () => {
  render(<About />, { wrapper: MemoryRouter });
  expect(screen.getByRole('img'));
});

test('render link', () => {
  render(<About />, { wrapper: MemoryRouter });
  // eslint-disable-next-line jest/valid-expect
  expect(screen.queryAllByText('navigation'));
});
