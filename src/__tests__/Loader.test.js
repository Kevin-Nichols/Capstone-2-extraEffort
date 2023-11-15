import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import Loader from '../components/Loader';

test('should render Loader component without crashing', () => {
  render(<Loader />);
});