import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';


//HeroBanner component. Renders text elements above "Looking For A Specific Exercise", view exercises button and the main banner image.
const HeroBanner = () => {
  return (
    <Box 
      sx={{ 
        mt: { lg: "212px", xs: "70px"},
        ml: { sm: "50px"} 
        }}
      position="relative"
      p="20px">

      <Typography 
        color="black" 
        fontWeight="600" 
        fontSize="26px">
        extra<span className='red-E'>E</span>ffort
      </Typography>

      <Typography 
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px'} }}
        mb="23px"
        mt="30px">
        Put In The Effort, <br /> Get The Result
      </Typography>

      <Typography 
        fontSize="22px"
        lineHeight="35px"
        mb={4}>
        Take a look at the most effective exercises
      </Typography>

      <Button 
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ 
          backgroundColor: '#ff2625', 
          padding: '10px' 
          }}>
        View Exercises
      </Button>

      <Typography 
        fontWeight={600}
        fontSize="160px"
        color="#ff2625"
        sx={{ 
          opacity: 0.1, 
          display: { lg: 'block', xs: 'none'} 
          }}>
        extra<span className='black-E'>E</span>ffort
      </Typography>

      <img 
        src={HeroBannerImage} 
        alt='banner' 
        className='hero-banner-img' 
      />
      
    </Box>
  )
};

export default HeroBanner