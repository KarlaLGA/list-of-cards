import { render, screen } from '@testing-library/react';
import TestText from './Components/TestText';

test('renders learn react link', () => {
  render(<TestText />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
