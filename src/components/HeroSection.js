import React from 'react';

import Image from '../assets/hero.png';
import '../styles/Hero.scss';

// import { TypeAnimation } from 'react-type-animation';

import { Grid, Button, Box, Typography } from '@mui/material';

function HeroSection() {
  return (
    <Grid className='Home' container component='main'>
      <img className='hero-image' src={Image} alt='background pattern' />
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          position: 'absolute',
          top: '20vh',
          left: '9%',
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems='center'
          justifyContent='center'
          marginRight={2}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={1}
            sx={{
              marginRight: {
                xl: '20rem',
                lg: '15rem',
                md: '14rem',
                // sm: '0rem',
              },
              lineHeight: 1,
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '50vw',
            }}
            display='flex'
          >
            <Typography
              variant='p'
              sx={{
                lineHeight: 1,
                maxWidth: '25vw',
                fontSize: {
                  xl: '20rem',
                  lg: '15rem',
                  md: '14rem',
                  sm: '15rem',
                  xs: '10rem',
                },
                textAlign: 'left',
              }}
            >
              He
              <br />
            </Typography>
            <Typography
              variant='p'
              sx={{
                lineHeight: 1,
                maxWidth: '25vw',
                fontSize: {
                  xl: '20rem',
                  lg: '15rem',
                  md: '14rem',
                  sm: '15rem',
                  xs: '10rem',
                },
                textAlign: 'left',
              }}
            >
              llo,
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={8}>
            <Typography
              variant='h3'
              sx={{
                fontSize: {
                  lg: '3.5rem',
                  md: '2.5rem',
                  sm: '2rem',
                  xs: '2rem',
                },
              }}
            >
              Im Ulas Temel
            </Typography>
            {/* <TypeAnimation
              className='hero-animation'
              sequence={['a FULL-STACK DEVELOPER.', 2000]}
              speed={40}
              // style={{ fontSize: '6rem' }}
              wrapper='h1'
              repeat={Infinity}
            /> */}
            <Typography
              variant='h3'
              sx={{
                fontSize: {
                  lg: '6rem',
                  md: '5rem',
                  sm: '4.3rem',
                  xs: '2.3rem',
                },
              }}
            >
              a FULL-STACK DEVELOPER.
            </Typography>
            <Typography
              className='hero-h3'
              variant='h3'
              sx={{
                fontSize: {
                  lg: '4rem',
                  md: '2.5rem',
                  sm: '3.2rem',
                  xs: '1.7rem',
                },
              }}
            >
              nice to meet you. Please take a
            </Typography>
            <Typography
              variant='h3'
              sx={{
                fontSize: {
                  lg: '4rem',
                  md: '2.5rem',
                  sm: '3.2rem',
                  xs: '1.7rem',
                },
              }}
            >
              look around!
            </Typography>
            <Typography
              className='hero-h4'
              variant='h4'
              sx={{
                fontSize: {
                  xl: '2.1rem',
                  lg: '1.6rem',
                  md: '1.5rem',
                  sm: '1.2rem',
                  xs: '1rem',
                },
              }}
            >
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
