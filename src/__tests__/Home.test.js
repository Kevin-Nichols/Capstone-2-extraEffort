import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import Home from '../pages/Home';

test('should render Home component without crashing', () => {
  const { getByText } = render(<Home />);

  expect(getByText('Take a look at the most effective exercises')).toBeInTheDocument();
  expect(getByText('Looking For A Specific Exercise?')).toBeInTheDocument();
})