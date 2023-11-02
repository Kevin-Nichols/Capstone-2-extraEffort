import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: "212px", xs: "70px"},
               ml: { sm: "50px"} }}
         position="relative"
         p="20px"
    >
      <Typography color="#ff2625" 
                  fontWeight="600" 
                  fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700}
                  sx={{ fontSize: { lg: '44px', xs: '40px'} }}
                  mb="23px"
                  mt="30px">
        Put in the <br /> Effort
      </Typography>
      <Typography fontSize="22px"
                  lineHeight="35px"
                  mb={4}>
        Take a look at the most effective exercises
      </Typography>
      <Button variant="contained"
              color="error"
              href="#exercises"
              sx={{ backgroundColor: '#ff2625', padding: '10px' }}>
        View Exercises
      </Button>
      <Typography fontWeight={600}
                  fontSize="200px"
                  color="#ff2625"
                  sx={{ opacity: 0.1, 
                        display: { lg: 'block', xs: 'none'} }}>
        Exercise
      </Typography>
      <img src={HeroBannerImage} 
           alt='banner' 
           className='hero-banner-img' 
      />
    </Box>
  )
}

export default HeroBanner