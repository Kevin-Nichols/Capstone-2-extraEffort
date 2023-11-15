import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import ExerciseDetail from '../pages/ExerciseDetail';

// Mock the window.scrollTo method
beforeAll(() => {
  // Define scrollTo method for the window object
  window.scrollTo = jest.fn();
});

test('should render ExerciseDetail component without crashing', () => {
  render(<ExerciseDetail />);
});

// Clear the mock after all tests
afterAll(() => {
  window.scrollTo.mockClear();
});