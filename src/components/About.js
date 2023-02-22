import React from 'react';
import {
  Grid,
  Button,
  Box,
  Typography,
  styled,
  createTheme,
  ThemeProvider,
  Avatar,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import '../styles/About.scss';
import Image from '../assets/about-background.png';
import ProfilePic from '../assets/profile-pic.png';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.secondary.main,
}));

const theme = createTheme();

theme.typography.h1 = {
  fontSize: '40px',
  '@media (min-width:600px)': {
    fontSize: '50px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '87px',
  },
};

theme.typography.h2 = {
  fontSize: '20px',
  '@media (min-width:600px)': {
    fontSize: '22px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '25px',
  },
};

theme.typography.h3 = {
  fontSize: '18px',
  '@media (min-width:600px)': {
    fontSize: '20px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '23px',
  },
};

function About() {
  return (
    <Grid container component='main'>
      <img className='hero-image' src={Image} alt='background pattern' />
      <Typography
        className='about-text'
        variant='h1'
        align='center'
        sx={{
          position: 'absolute',
          top: '10vh',
          left: '40vw',
          justify: 'center',
        }}
      >
        About me
      </Typography>
      <Box
        sx={{
          position: 'absolute',
          width: '100vw',
          height: '70vh',
          top: '22vh',
          pt: 5,
          backgroundColor: 'primary.light',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={6}
              md={3}
              sx={{
                position: 'flex',
                mt: 10,
              }}
            >
              <Box>
                <Item>
                  <Avatar
                    alt='Ulas Temel'
                    src={ProfilePic}
                    sx={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </Item>
              </Box>
            </Grid>
            <Grid item xs={6} md={8}>
              <Item>
                <ThemeProvider theme={theme}>
                  <Typography className='about-text' variant='h2' align='left'>
                    I'm a Junior Software Engineer with a passion for web design
                    and programming developed from an early age. I bring a
                    diverse skill set sharpened through building interactive
                    games and designing and managing websites for family and
                    friends. My experience in technical operations and project
                    management, gained through running a successful print
                    business (now inactive), has prepared me well for a career
                    in software engineering. After completing a software
                    engineering course at General Assembly, I am eager to join a
                    talented team where I can continue to learn, grow, and apply
                    my skills to develop innovative software solutions. My
                    ultimate goal is to become a highly skilled software
                    engineer and make a meaningful impact in the industry.
                  </Typography>
                  <Typography
                    className='about-text'
                    variant='h2'
                    align='center'
                    sx={{ pt: 1 }}
                  >
                    <u>INTERESTS:</u>
                  </Typography>
                  <Typography
                    className='about-text'
                    variant='h3'
                    align='left'
                    sx={{ pt: 2 }}
                  >
                    <u>Gym/training/cycling:</u> Most of my life I've been
                    active, played basketball at a national level, lifting
                    weights or cycling. Main interest now is trying to keep
                    myself fit and functional which is key with having young
                    kids.
                  </Typography>
                  <Typography className='about-text' variant='h3' align='left'>
                    <u>Scuba diving:</u> Since getting my scuba diving
                    certificates I've been trying to get out and dive in every
                    country I have been to.
                  </Typography>
                  <Typography className='about-text' variant='h3' align='left'>
                    <u>Cars and boats:</u> Have always had a keen interest in
                    cars, mainly classic and recently managed to get one of my
                    favourite cars, a Datsun 280z just needs a lot of work. Also
                    enjoy taking my little speed boat out in the summer.
                  </Typography>
                </ThemeProvider>
                <Box textAlign='right'>
                  <Button
                    href='/contact'
                    color='secondary'
                    style={{ fontSize: '30pt' }}
                  >
                    <u>Get in touch</u>
                    <ArrowForwardIcon sx={{ fontSize: 40 }} />
                  </Button>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
}

export default About;
