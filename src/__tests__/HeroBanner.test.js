import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import HeroBanner from '../components/HeroBanner';

test('should render HeroBanner component without crashing', () => {
  render(<HeroBanner />);
});