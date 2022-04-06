import { render, screen } from '@testing-library/react';

import Modal from './Modal';

test('renders text', () => {
  render(<Modal />);
  expect(screen.getByText(/comunidad/i)).toBeInTheDocument();
});
