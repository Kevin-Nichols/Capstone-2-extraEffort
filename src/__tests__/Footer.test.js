import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import Footer from '../components/Footer';

test('should render Footer component without crashing', () => {
  render(<Footer />);
});