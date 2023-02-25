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
          top: {
            xl: '20vh',
            lg: '20vh',
            md: '15vh',
            sm: '12vh',
            xs: '15vh',
          },
          left: {
            xl: '8%',
            lg: '5%',
            md: '6%',
            sm: '9%',
            xs: '8%',
          },
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems='center'
          // justifyContent='center'
          // marginRight={2}
        >
          <Grid
            item
            // xs={12}
            // sm={6}
            // md={1}
            sx={{
              pr: {
                xl: 7,
                lg: 4.7,
                md: 7,
                sm: 7,
                sx: 7,
              },
              marginLeft: {
                // xl: '1rem',
                // lg: '1rem',
                // md: '0rem',
                // sm: '0rem',
                // sx: '-10rem',
              },
              lineHeight: 1,
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '50vw',
            }}
            display='flex'
          >
            <Typography
              className='hero-text'
              variant='p'
              sx={{
                lineHeight: 1,
                maxWidth: '25vw',
                fontSize: {
                  xl: '18rem',
                  lg: '12rem',
                  md: '20rem',
                  sm: '15rem',
                  xs: '10.5rem',
                },
                textAlign: 'left',
              }}
            >
              He
              <br />
            </Typography>
            <Typography
              className='hero-text'
              variant='p'
              sx={{
                lineHeight: 1,
                maxWidth: '25vw',
                fontSize: {
                  xl: '18rem',
                  lg: '12rem',
                  md: '20rem',
                  sm: '15rem',
                  xs: '10.5rem',
                },

                textAlign: 'left',
              }}
            >
              llo,
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <Typography
              variant='h3'
              sx={{
                fontSize: {
                  xl: '3.5rem',
                  lg: '3.5rem',
                  md: '2.8rem',
                  sm: '2.5rem',
                  xs: '2.5rem',
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
                  xl: '6rem',
                  lg: '6rem',
                  md: '5.3rem',
                  sm: '4.8rem',
                  xs: '2.6rem',
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
                  md: '2.8rem',
                  sm: '3.7rem',
                  xs: '2rem',
                },
              }}
            >
              Nice to meet you. Please take a
            </Typography>
            <Typography
              variant='h3'
              sx={{
                fontSize: {
                  lg: '4rem',
                  md: '2.8rem',
                  sm: '3.7rem',
                  xs: '2rem',
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
                  md: '1.8rem',
                  sm: '1.7rem',
                  xs: '1.3rem',
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
