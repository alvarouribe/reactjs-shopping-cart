import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App title', () => {
  render(<App />);
  const linkElement = screen.getByText(/MVM Shopping cart/i);
  expect(linkElement).toBeInTheDocument();
});
