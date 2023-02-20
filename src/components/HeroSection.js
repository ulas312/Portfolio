import React from 'react';

import Image from '../assets/hero.png';
import '../styles/Hero.scss';

import { TypeAnimation } from 'react-type-animation';

import { Grid, Button, Box, Typography } from '@mui/material';

function HeroSection() {
  return (
    <Grid className='Home' container component='main'>
      <img className='hero-image' src={Image} alt='background pattern' />
      <Box
        sx={{
          flexGrow: 1,
          position: 'absolute',
          top: '15vh',
          justify: 'center',
          left: '8.5%',
          pt: 2,
          pb: 2,
          // width: '60%',
          // width: {
          //   xs: 100,
          //   sm: 200,
          //   md: 300,
          //   lg: 400,
          //   xl: 500,
          // },
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems='center'
          justifyContent='center'
          style={{ minWidth: '85vw' }}
        >
          <Grid item xs={4} sx={{ width: '500px' }}>
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
          <Grid item xs={8} sx={{ width: '600px' }}>
            <Typography
              className='hero-h3'
              variant='h3'
              style={{ fontSize: '60pt' }}
            >
              Im Ulas Temel
            </Typography>

            <TypeAnimation
              className='hero-animation'
              // Same String at the start will only be typed once, initially
              sequence={['a FULL-STACK DEVELOPER.', 2000]}
              speed={40} // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: '90pt' }}
              wrapper='h1' // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />

            <Typography
              className='hero-h3'
              variant='h3'
              style={{ fontSize: '60pt' }}
            >
              nice to meet you.
            </Typography>
            <Typography
              className='hero-h3'
              variant='h3'
              style={{ fontSize: '60pt' }}
            >
              Please take a look around!
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
