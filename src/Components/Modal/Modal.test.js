import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Modal from './Modal';

test('should render a text', () => {
  render(<Modal />, { wrapper: MemoryRouter });
  expect(screen.getByText(/comunidad/i)).toBeInTheDocument();
});

test('render some links', () => {
  render(<Modal />, { wrapper: MemoryRouter });
  // eslint-disable-next-line jest/valid-expect
  expect(screen.queryAllByText('navigation'));
  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(2);
  screen.getByRole('link', { name: /regresar/i });
  screen.getByRole('link', { name: /continuar/i });
});
