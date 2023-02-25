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
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          position: 'absolute',
          top: {
            xl: '16vh',
            lg: '15vh',
            md: '11vh',
            sm: '12vh',
            xs: '12vh',
          },
          // left: '9%',
          width: '100%',
          // px: 1,
          px: theme.spacing(2),

          // minHeight: '100vh',
          // height: '80vh',
          backgroundColor: 'primary.light',
          pt: theme.spacing(2),
          pb: theme.spacing(2),
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                position: 'flex',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                Box
                sx={{
                  display: 'flex',
                  justifyContent: {
                    xl: 'left',
                    lg: 'left',
                    md: 'left',
                    sm: 'left',
                    xs: 'left',
                  },
                  alignItems: 'center',
                }}
              >
                <Item
                  sx={{
                    display: 'flex',
                    justifyContent: {
                      xl: 'left',
                      lg: 'left',
                      md: 'left',
                      sm: 'center',
                      xs: 'center',
                    },
                  }}
                >
                  <Avatar
                    alt='Ulas Temel'
                    src={ProfilePic}
                    sx={{
                      width: {
                        xl: '80%',
                        lg: '90%',
                        md: '90%',
                        sm: '35%',
                        xs: '30%',
                      },
                      height: 'auto',
                    }}
                  />
                </Item>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Item>
                <ThemeProvider theme={theme}>
                  <Typography
                    className='about-text'
                    variant='h2'
                    align='left'
                    // textAlign='center'
                    sx={{
                      fontSize: {
                        xl: '2rem',
                        lg: '1.8rem',
                        md: '2rem',
                        sm: '1.8rem',
                        xs: '1.2rem',
                      },
                    }}
                  >
                    About Me:
                  </Typography>
                  <Typography
                    className='about-text'
                    variant='h2'
                    align='left'
                    // textAlign='center'
                    sx={{
                      fontSize: {
                        xl: '1.51rem',
                        lg: '1.22rem',
                        md: '1.5rem',
                        sm: '1.3rem',
                        xs: '0.75rem',
                      },
                    }}
                  >
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
                  {/* <Typography
                    className='about-text'
                    variant='h2'
                    align='center'
                    sx={{ pt: 1 }}
                  >
                    <u>INTERESTS:</u>
                  </Typography> */}
                  <Typography
                    className='about-text'
                    variant='h2'
                    align='left'
                    // textAlign='center'
                    sx={{
                      pt: 1,
                      fontSize: {
                        xl: '2rem',
                        lg: '1.8rem',
                        md: '2rem',
                        sm: '1.8rem',
                        xs: '1.2rem',
                      },
                    }}
                  >
                    Interests:
                  </Typography>
                  <Typography
                    className='about-text'
                    variant='h3'
                    align='left'
                    sx={{
                      // pt: 2,
                      fontSize: {
                        xl: '1.51rem',
                        lg: '1.22rem',
                        md: '1.5rem',
                        sm: '1.3rem',
                        xs: '0.75rem',
                      },
                    }}
                  >
                    <u>Gym/training/cycling:</u> Most of my life I've been
                    active, played basketball at a national level, lifting
                    weights or cycling. Main interest now is trying to keep
                    myself fit and functional which is key with having young
                    kids.
                  </Typography>
                  <Typography
                    className='about-text'
                    variant='h3'
                    align='left'
                    sx={{
                      fontSize: {
                        xl: '1.51rem',
                        lg: '1.22rem',
                        md: '1.5rem',
                        sm: '1.3rem',
                        xs: '0.75rem',
                      },
                    }}
                  >
                    <u>Scuba diving:</u> Since getting my scuba diving
                    certificates I've been trying to get out and dive in every
                    country I have been to.
                  </Typography>
                  <Typography
                    className='about-text'
                    variant='h3'
                    align='left'
                    sx={{
                      fontSize: {
                        xl: '1.51rem',
                        lg: '1.22rem',
                        md: '1.5rem',
                        sm: '1.3rem',
                        xs: '0.75rem',
                      },
                    }}
                  >
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
                    sx={{
                      fontSize: {
                        xl: '30pt',
                        lg: '27pt',
                        md: '30pt',
                        sm: '30pt',
                        xs: '19pt',
                      },
                    }}
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
