import React from 'react';

import Image from '../assets/hero.png';
import '../styles/Hero.scss';

import { Grid, Button, Box, Typography } from '@mui/material';

function HeroSection() {
  return (
    <Grid className='Home' container component='main' sx={{ height: '100vh' }}>
      <img className='hero-image' src={Image} alt='background pattern' />
      <Box
        sx={{
          flexGrow: 1,
          position: 'absolute',
          top: '20vh',
          justify: 'center',
          left: '8.5%',
          pt: 2,
          pb: 2,
          width: '60%',
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems='center'
          justifyContent='center'
          style={{ minWidth: '85vw', minHeight: '60vh' }}
        >
          <Grid className='a1' item xs={4} sx={{ width: '600px' }}>
            <Typography
              className='hero-p'
              variant='p'
              sx={{ lineHeight: 1, m: 1 }}
            >
              He
              <br />
            </Typography>
            <Typography
              className='hero-p'
              variant='p'
              sx={{ lineHeight: 1, m: 1 }}
            >
              llo,
            </Typography>
          </Grid>
          <Grid className='a2' item xs={8}>
            <Typography className='hero-h3' variant='h3'>
              i’m ulas temel.
            </Typography>
            <Typography className='hero-h1' variant='h1'>
              a FULL-STACK DEVELOPER.
            </Typography>
            <Typography className='hero-h3' variant='h3'>
              nice to meet you. Please take a look
            </Typography>
            <Typography className='hero-h3' variant='h3'>
              around!{' '}
            </Typography>
            <Typography className='hero-h4' variant='h4'>
              I am passionate about building excellent software that improves
              the lives of those around me.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default HeroSection;
