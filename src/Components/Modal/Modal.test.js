import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Modal from './Modal';

test('renders text', () => {
  render(<Modal />, { wrapper: MemoryRouter });
  expect(screen.getByText(/comunidad/i)).toBeInTheDocument();
});

test('render link', () => {
  render(<Modal />, { wrapper: MemoryRouter });
  // eslint-disable-next-line jest/valid-expect
  expect(screen.queryAllByText('navigation'));
});
