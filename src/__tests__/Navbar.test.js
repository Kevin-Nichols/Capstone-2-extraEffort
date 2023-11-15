import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'intersection-observer';
import Navbar from '../components/Navbar';

test('should render Navbar component without crashing', () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
});