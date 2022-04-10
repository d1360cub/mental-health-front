/* eslint-disable jest/valid-expect */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Home from './Home';

test('renders text', () => {
  render(<Home />, { wrapper: MemoryRouter });
  expect(screen.getByText(/cerebro/i)).toBeInTheDocument();
});

test('renders image', () => {
  render(<Home />, { wrapper: MemoryRouter });
  expect(screen.getByRole('img'));
});

test('renders h3', () => {
  render(<Home />, { wrapper: MemoryRouter });
  expect(screen.getByRole('heading', { level: 3 }));
});

test('render link', () => {
  render(<Home />, { wrapper: MemoryRouter });
  // eslint-disable-next-line jest/valid-expect
  expect(screen.queryAllByText('navigation'));
});
