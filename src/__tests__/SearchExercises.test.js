import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import SearchExercises from '../components/SearchExercises';

test('should render SearchExercises component without crashing', () => {
  render(
    <SearchExercises
      setExercises={() => {}}
      bodyPart=""
      setBodyPart={() => {}}
    />
  );
});