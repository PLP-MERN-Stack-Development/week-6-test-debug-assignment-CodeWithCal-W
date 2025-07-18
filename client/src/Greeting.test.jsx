import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from './tests/unit/Greeting';

test('renders greeting message with name', () => {
  render(<Greeting name="Jacob" />);
  const greetingElement = screen.getByText(/Hello, Jacob!/i);
  expect(greetingElement).toBeInTheDocument();
});
