import { render, screen } from '@testing-library/react';

import Home from './Home';

test('renders text', () => {
  render(<Home />);
  expect(screen.getByText(/cerebro/i)).toBeInTheDocument();
});
