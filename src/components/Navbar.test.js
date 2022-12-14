/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './Navbar';

it('renders navbar as per expectation', () => {
  const tree = render(
    <Router>
      <Navbar />
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
