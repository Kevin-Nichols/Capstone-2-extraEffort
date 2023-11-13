import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

//ExerciseCard component. Renders a card link with a gif, body part link, target muscle link and name for a specific exercise. Props are passed from Exercises component and HorizontalScrollbar component. 
const ExerciseCard = ({ exercise }) => (
  <Link 
    className="exercise-card" 
    to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

    <Stack direction="row">
      <Button sx={{ 
                ml: '21px', 
                color: '#fff', 
                background: '#FFA9A9', 
                fontSize: '14px', 
                borderRadius: '20px', 
                textTransform: 'capitalize' 
                }}>
        {exercise.bodyPart}
      </Button>

      <Button sx={{ 
                ml: '21px', 
                color: '#fff', 
                background: '#b274fa', 
                fontSize: '14px', 
                borderRadius: '20px', 
                textTransform: 'capitalize' 
                }}>
        {exercise.target}
      </Button>

    </Stack>

    <Typography 
      ml="21px" 
      color="#000" 
      fontWeight="bold" 
      sx={{ fontSize: { lg: '24px', xs: '20px' } }} 
      mt="11px" pb="10px" 
      textTransform="capitalize">
        {exercise.name}
    </Typography>
    
  </Link>
);

export default ExerciseCard;