/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

import Calculator from './Calculator';

it('performs and displays calculations properly', () => {
  render(
    <Router>
      <Calculator />
    </Router>,
  );
  const key1 = screen.getByText('5');
  const operator = screen.getByText('x');
  const key2 = screen.getByText('5');
  const result = screen.getByText('=');

  fireEvent.click(key1);
  fireEvent.click(operator);
  fireEvent.click(key2);
  fireEvent.click(result);
  const output = screen.getByText('25');
  expect(output).toBeVisible();
});
