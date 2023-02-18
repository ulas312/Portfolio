import React from 'react';
import {
  Grid,
  Button,
  Box,
  Typography,
  styled,
  Paper,
  createTheme,
  ThemeProvider,
  Avatar,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import '../styles/About.scss';
import Image from '../assets/about-background.png';
import ProfilePic from '../assets/profile-pic.png';

const Item = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const theme = createTheme();

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
    <Grid className='Home' container component='main'>
      <img className='hero-image' src={Image} alt='background pattern' />
      <Typography
        style={{
          fontSize: 87,
        }}
        sx={{
          flexGrow: 1,
          position: 'absolute',
          top: '10vh',
          left: '35vw',
          justify: 'center',
        }}
      >
        Get to know me.
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
                // flexGrow: 1,
                position: 'flex',
                mt: 10,
                // top: '22vh',
                // justify: 'center',
                // left: '-1vw',
              }}
            >
              <Item>
                <Avatar
                  alt='Ulas Temel'
                  src={ProfilePic}
                  sx={{ width: '100%', height: 'auto' }}
                />
              </Item>
            </Grid>
            <Grid item xs={6} md={8}>
              <Item>
                {/* <Typography
                  className='hero-h2'
                  variant='h2'
                  style={{ fontSize: '25pt' }}
                >
                  I'm a Junior Software Engineer with a passion for web design
                  and programming developed from an early age. I bring a diverse
                  skill set sharpened through building interactive games and
                  designing and managing websites for family and friends. My
                  experience in technical operations and project management,
                  gained through running a successful print business (now
                  inactive), has prepared me well for a career in software
                  engineering. After completing a software engineering course at
                  General Assembly, I am eager to join a talented team where I
                  can continue to learn, grow, and apply my skills to develop
                  innovative software solutions. My ultimate goal is to become a
                  highly skilled software engineer and make a meaningful impact
                  in the industry.
                </Typography>
                <Typography
                  className='hero-h2'
                  variant='h2'
                  style={{ fontSize: '25pt' }}
                  sx={{ pt: 6 }}
                >
                  <u>INTERESTS:</u>
                </Typography>
                <Typography
                  className='hero-h2'
                  variant='h2'
                  style={{ fontSize: '20pt' }}
                >
                  Gym/training/cycling: Most of my life I've been active, played
                  basketball at a national level, lifting weights or cycling.
                  Main interest now is trying to keep myself fit and functional
                  which is key with having young kids. Scuba diving: Since
                  getting my scuba diving certificates I've been trying to get
                  out and dive in every country I have been to. Cars and boats:
                  Have always had a keen interest in cars, mainly classic and
                  recently managed to get one of my favourite cars, a Datsun
                  280z just needs a lot of work. Also enjoy taking my little
                  speed boat out in the summer.
                </Typography> */}
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
                <Button
                  href='/contact'
                  color='secondary'
                  style={{ fontSize: '30pt' }}
                >
                  <u>Get in touch</u>
                  <ArrowForwardIcon sx={{ fontSize: 40 }} />
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* <Box
        sx={{
          position: 'absolute',
          width: '100vw',
          height: '70vh',
          top: '20vh',
          backgroundColor: 'primary.light',
        }}
      /> */}
      {/* <Box
        sx={{
          flexGrow: 1,
          position: 'absolute',
          top: '22vh',
          justify: 'center',
          left: '-1vw',
          pt: 2,
          pb: 2,
        }}
      >
        <Grid item sm={12} xs={12}>
          <img
            className='profile-pic'
            src={ProfilePic}
            alt='profile pic'
            style={{ width: '620px', height: '600px' }}
          />
        </Grid>
        <Typography>
          I'm a Junior Software Engineer with a passion for web design and
          programming developed from an early age. I bring a diverse skill set
          sharpened through building interactive games and designing and
          managing websites for family and friends. My experience in technical
          operations and project management, gained through running a successful
          print business (now inactive), has prepared me well for a career in
          software engineering. After completing a software engineering course
          at General Assembly, I am eager to join a talented team where I can
          continue to learn, grow, and apply my skills to develop innovative
          software solutions. My ultimate goal is to become a highly skilled
          software engineer and make a meaningful impact in the industry.
        </Typography>
      </Box> */}
    </Grid>
  );
}

export default About;
