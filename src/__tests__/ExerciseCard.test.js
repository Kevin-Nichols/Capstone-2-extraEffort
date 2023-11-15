import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'intersection-observer';
import ExerciseCard from '../components/ExerciseCard';

test('should render ExerciseCard component without crashing', () => {
  const mockExercise = {
    id: '123',
    gifUrl: 'https://example.com/exercise.gif',
    bodyPart: 'legs',
    target: 'quadriceps',
    name: 'Squat',
  };

  render(
    <Router>
      <ExerciseCard exercise={mockExercise} />
    </Router>  
    );
});