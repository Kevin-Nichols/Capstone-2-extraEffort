import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utilities/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

// Exercises component. Props passed from Home. Creates state for currentPage and exercisesPerPage. Renders exercise results via an ExerciseCard. Passes props to ExerciseCard.
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);

  //This hook fetches 'all' bodyPart, or a specific bodyPart data from the API.
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
          exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=200', exerciseOptions);
      } else {
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=200`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  //Variables for keeping track of exercise index and current exercises. 
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  // If there are no current exercises, show the Loader component.
  if (!currentExercises.length) return <Loader />;

  return (
    <Box 
      id="exercises" 
      sx={{ mt: { lg: '109px' } }} 
      mt="50px" 
      p="20px">

      <Typography 
        variant="h4" 
        fontWeight="bold" 
        sx={{ fontSize: { lg: '44px', xs: '30px' } }} 
        mb="46px">
          Showing Results
      </Typography>

      <Stack 
        direction="row" 
        sx={{ gap: { lg: '107px', xs: '50px' } }} 
        flexWrap="wrap" 
        justifyContent="center">
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>

      <Stack 
        sx={{ mt: { lg: '114px', xs: '70px' } }} 
        alignItems="center">
          {exercises.length > 9 && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
      </Stack>
      
    </Box>
  );
};

export default Exercises;