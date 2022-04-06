import { render, screen } from '@testing-library/react';

import About from './About';

test('renders text', () => {
  render(<About />);
  expect(screen.getByText(/contratos/i)).toBeInTheDocument();
});
