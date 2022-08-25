/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Quotes from './Quotes';

it('renders Quotes page as per expectation', () => {
  const tree = render(
    <Router>
      <Quotes />
    </Router>
  );
  expect(tree).toMatchSnapshot();
});
