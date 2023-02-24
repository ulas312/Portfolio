import React from 'react';
import '../styles/Contact.scss';
import Image from '../assets/contact-background.png';
import EmailIcon from '../assets/email-icon.svg';
import GitHubIcon from '../assets/github-icon.svg';
import LinkedInIcon from '../assets/linkedin-icon.svg';
// import Speech from '../assets/speech-bubble.png';
import EmailForm from './common/EmailForm';

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Typography,
  List,
} from '@mui/material';
// import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <Grid container component='main'>
      <img className='hero-image' src={Image} alt='background pattern' />
      <Box
        alignItems='center'
        justifyContent='center'
        item
        xs={12}
        sm={6}
        style={{ width: '90vw' }}
        sx={{
          position: 'absolute',
          height: '70vh',
          top: {
            xl: '21vh',
            lg: '22vh',
            md: '14vh',
            sm: '15vh',
            xs: '15vh',
          },
          left: {
            xl: '10%',
            lg: '10%',
            md: '10%',
            sm: '10%',
            xs: '10%',
          },
          // left: '10%',
        }}
      >
        <Grid sx={{ flexGrow: 1 }}>
          <Grid
            item
            // xs={12}
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid container justifyContent='center'>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    ml: 4,
                    width: 500,
                    height: 690,
                  },
                }}
              >
                <EmailForm />
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  maxWidth: 600,
                  display: {
                    xl: 'block',
                    lg: 'block',
                    md: 'block',
                    sm: 'none',
                    xs: 'none',
                  },
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <List>
                      <Card
                        sx={{
                          width: {
                            xl: '22rem',
                            lg: '22rem',
                            md: '22rem',
                            sm: '22rem',
                            xs: '15rem',
                          },
                          height: 690,
                          // width: 500,
                          ml: 4,
                        }}
                        style={{ backgroundColor: 'transparent' }}
                      >
                        <CardMedia
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <Button textalign='center' href='' target='_blank'>
                            <Box
                              component='img'
                              src={EmailIcon}
                              alt='Email icon'
                              sx={{
                                width: {
                                  xl: '10rem',
                                  lg: '10rem',
                                  md: '10rem',
                                  sm: '10rem',
                                  xs: '10rem',
                                },
                                mx: 15,
                                mt: 2,
                                mb: 0.5,
                              }}
                            />
                          </Button>
                        </CardMedia>
                        <CardContent>
                          <Typography
                            variant='h4'
                            component='div'
                            color='text.primary'
                            sx={{ fontSize: 30, textAlign: 'center' }}
                          >
                            temel.ulas@googlemail.com
                          </Typography>
                        </CardContent>

                        <CardMedia
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <Button
                            textalign='center'
                            href='https://github.com/ulas312'
                            target='_blank'
                          >
                            <Box
                              component='img'
                              src={GitHubIcon}
                              alt='Github icon'
                              sx={{
                                width: {
                                  xl: '10rem',
                                  lg: '10rem',
                                  md: '10rem',
                                  sm: '10rem',
                                  xs: '10rem',
                                },
                                mx: 15,
                                mt: 2,
                                mb: 0.5,
                              }}
                            />
                          </Button>
                        </CardMedia>
                        <CardContent>
                          <Typography
                            variant='h4'
                            component='div'
                            color='text.primary'
                            sx={{ fontSize: 30, textAlign: 'center' }}
                          >
                            github.com/ulas312
                          </Typography>
                        </CardContent>
                        <CardMedia
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <Button
                            textalign='center'
                            href='https://www.linkedin.com/in/ulastemel/'
                            target='_blank'
                          >
                            <Box
                              component='img'
                              src={LinkedInIcon}
                              alt='LinkedIn icon'
                              sx={{
                                width: {
                                  xl: '10rem',
                                  lg: '10rem',
                                  md: '10rem',
                                  sm: '10rem',
                                  xs: '10rem',
                                },
                                mx: 15,
                                mt: 1,
                                mb: 0.5,
                              }}
                            />
                          </Button>
                        </CardMedia>
                        <CardContent>
                          <Typography
                            variant='h4'
                            component='div'
                            color='text.primary'
                            sx={{ fontSize: 30, textAlign: 'center' }}
                          >
                            /in/ulastemel
                          </Typography>
                        </CardContent>
                      </Card>
                    </List>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default Contact;
