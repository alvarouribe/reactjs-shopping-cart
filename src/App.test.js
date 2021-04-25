import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App title', () => {
  render(<App />);
  const linkElement = screen.getByText(/MVM Shopping cart/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Product title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Products/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Cart items title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Cart items/i);
  expect(linkElement).toBeInTheDocument();
});