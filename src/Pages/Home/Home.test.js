import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Home from './Home';

test('renders text', () => {
  render(<Home />, { wrapper: MemoryRouter });
  expect(screen.getByText(/cerebro/i)).toBeInTheDocument();
});
