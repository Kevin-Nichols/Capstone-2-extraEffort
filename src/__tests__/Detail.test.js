import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import Detail from '../components/Detail';

test('should render Detail component without crashing', () => {
  const mockExerciseDetail = {
    bodyPart: 'legs',
    gifUrl: 'https://example.com/exercise.gif',
    name: 'Squat',
    target: 'quadriceps',
    equipment: 'barbell',
  };

  render(<Detail exerciseDetail={mockExerciseDetail} />);
});