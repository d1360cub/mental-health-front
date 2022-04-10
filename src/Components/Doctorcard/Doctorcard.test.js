/* eslint-disable jest/valid-expect */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Doctorcard from './Doctorcard';

test('renders button', () => {
  render(<Doctorcard />, { wrapper: MemoryRouter });
  expect(screen.getByRole('button'));
});

test('renders image', () => {
  render(<Doctorcard />, { wrapper: MemoryRouter });
  expect(screen.getByRole('img'));
});

test('renders h3', () => {
  render(<Doctorcard />, { wrapper: MemoryRouter });
  expect(screen.getByRole('heading', { level: 3 }));
});
