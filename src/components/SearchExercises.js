import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utilities/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

//SearchExercises component. Props passed from Home.Creates state for search and bodyParts. Renders a search bar and HorizontalScrollbar. Passes props to HorizontalScrollbar.
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  //Hook for fetching a body part list from the API.
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  //Function for search button. Fetches exercises and limits to 200 results. Filters by search value and checks to see if the value is a name, target, equipment or body part.
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=200', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack 
      id="search" 
      alignItems="center" 
      mt="37px" 
      justifyContent="center" 
      p="20px">

      <Typography 
        fontWeight={700} 
        sx={{ fontSize: { lg: '44px', xs: '30px' } }} 
        mb="49px" 
        textAlign="center">
        Looking For A <br /> Specific Exercise?
      </Typography>

      <Box position="relative" mb="72px">

        <TextField
          height="76px"
          sx={{ 
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, 
            width: { lg: '1170px', xs: '350px' }, 
            backgroundColor: '#fff', 
            borderRadius: '40px' 
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />

        <Button className="search-btn" 
                sx={{ 
                  bgcolor: '#FF2625', 
                  color: '#fff', 
                  textTransform: 'none', 
                  width: { lg: '173px', xs: '80px' }, 
                  height: '56px', 
                  position: 'absolute', 
                  right: '0px', 
                  fontSize: { lg: '20px', xs: '14px' } 
                }} 
                onClick={handleSearch}
                href="#search">
          Search
        </Button>

      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>

        <HorizontalScrollbar 
          data={bodyParts} 
          bodyParts 
          setBodyPart={setBodyPart} 
          bodyPart={bodyPart} 
        />
        
      </Box>

    </Stack>
  );
};

export default SearchExercises;