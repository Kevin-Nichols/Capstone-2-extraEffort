import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

//NarBar component. Renders the Logo link, Home link, Exercises link and Search link.
const Navbar = () => {
  return (
    <Stack 
      direction="row"
      justifyContent="space-around" 
      sx={{ 
        gap: {sm: '122px', xs: '40px'}, 
        mt: { sm: '32px', xs: '20px'}, 
        justifyContent: 'none'
      }}
      px='20px'>

      <Link to="/">
        <img src={Logo} 
             alt="logo" 
             style={{ 
              width: '48px', 
              height: '48px', 
              margin: '0 20px'
            }} 
        />
      </Link>

      <Stack 
        direction="row"
        gap="40px"
        fontSize="24px"
        fontFamily="Roboto"
        alignItems="flex-end">

        <Link 
          to="/" 
          style={{ 
            textDecoration: 'none', 
            color: '#3a1212', 
            borderBottom: '3px solid #ff2625'
          }}>
          Home
        </Link>

        <HashLink to="/#exercises" 
           style={{
            textDecoration: 'none', 
            color: '#3a1212'
           }}>
            Exercises
        </HashLink>
        <HashLink to="/#search" 
           style={{
            textDecoration: 'none', 
            color: '#3a1212'
           }}>
            Search ⌕
        </HashLink>
      </Stack>

    </Stack>
  )
}

export default Navbar