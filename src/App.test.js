import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('paragraph c should be in document', async () => {
  render(<App />);
  fireEvent.blur(screen.getByTestId('hpi-a'))
  expect(screen.getByTestId('hpi-c')).toBeInTheDocument();
});

test('paragraph c should not be in document', async () => {
  render(<App />);
  const submitButton = screen.queryByTestId('hpi-c');
  expect(submitButton).toBeNull() // it doesn't exist
});
