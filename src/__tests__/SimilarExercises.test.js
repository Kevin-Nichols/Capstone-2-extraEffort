import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import SimilarExercises from '../components/SimilarExercises';

test('should render SimilarExercises component without crashing', () => {
  render(
    <SimilarExercises
      targetMuscleExercises={[]}
      equipmentExercises={[]}
    />
  );
});