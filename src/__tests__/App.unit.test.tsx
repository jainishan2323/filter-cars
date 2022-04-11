import React from 'react';
import { render, screen } from '@testing-library/react';
import App from 'App';

test('Render filters button', () => {
  render(<App />);
  const filterButton = screen.getByText(/Filter/i);
  expect(filterButton).toBeInTheDocument();
});

test('Check Header links render', () => {
    render(
      <App />
    );
    const headerLinks = screen.getByText(/Purchase/i);
    expect(headerLinks).toBeInTheDocument();
});

test('Check if list component renders correctly on Home', () => {
  render(
    <App />
  );
  const linkComp = screen.getByText(/Available Cars/i);
  expect(linkComp).toBeInTheDocument();
});

test('Check if Footer renders correctly', () => {
  render(
    <App />
  );
  const text = screen.getByText(/Ishan Jain/i);
  expect(text).toBeInTheDocument();
});