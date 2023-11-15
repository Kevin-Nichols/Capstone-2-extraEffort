import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import Exercises from '../components/Exercises';

test('should render Exercises component without crashing', () => {
  const mockExercises = [];
  const mockSetExercises = jest.fn();
  const mockBodyPart = 'legs';

  render(<Exercises exercises={mockExercises} setExercises={mockSetExercises} bodyPart={mockBodyPart} />);
});