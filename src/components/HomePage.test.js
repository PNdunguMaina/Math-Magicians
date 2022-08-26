/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from './HomePage';

it('renders HomePage as per expectation', () => {
  const tree = render(
    <Router>
      <HomePage />
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
