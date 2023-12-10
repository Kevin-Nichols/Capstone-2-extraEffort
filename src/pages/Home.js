import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

//Home component. Creates state for exercises and bodyPart. Renders HeroBanner, SearchExercises and Exercises. Passes props to SearchExercises and Exercises.
// Time complexity for setting state would be O(1).
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />

      <SearchExercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} 
      />

      <Exercises 
        exercises={exercises} 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
      />
      
    </Box>
  );
};

export default Home;