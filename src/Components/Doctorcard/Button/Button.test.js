/* eslint-disable jest/valid-expect */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Button from './button';

test('renders button', () => {
  render(<Button />, { wrapper: MemoryRouter });
  expect(screen.getByRole('button'));
});
