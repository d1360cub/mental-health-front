import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import About from './About';

test('renders text', () => {
  render(<About />, { wrapper: MemoryRouter });
  expect(screen.getByText(/contratos/i)).toBeInTheDocument();
});
