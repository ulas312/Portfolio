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

function Contact() {
  return (
    <Grid container component='main'>
      <img className='hero-image' src={Image} alt='background pattern' />
      <Box
        alignItems='center'
        justifyContent='center'
        item
        xs={12}
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
            xl: 0,
            lg: 0,
            md: 0,
            sm: 0,
            xs: '4%',
          },
        }}
      >
        <Grid sx={{ flexGrow: 1 }}>
          <Grid item container>
            <Grid container justifyContent='center'>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  ml: 1,
                }}
              >
                <EmailForm />
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  maxWidth: {
                    xl: 170,
                    lg: 300,
                    md: 250,
                    sm: 100,
                  },
                  display: {
                    xl: 'block',
                    lg: 'block',
                    md: 'block',
                    sm: 'block',
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
                            sm: '11rem',
                            xs: '15rem',
                          },
                          height: 590,
                          ml: 2,
                        }}
                        style={{ backgroundColor: 'transparent' }}
                      >
                        <CardMedia
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <Button textAlign='center' href='' target='_blank'>
                            <Box
                              component='img'
                              src={EmailIcon}
                              alt='Email icon'
                              sx={{
                                width: {
                                  xl: '6.5rem',
                                  lg: '6rem',
                                  md: '6rem',
                                  sm: '5rem',
                                  xs: '5rem',
                                },
                                mt: {
                                  xl: 0,
                                  lg: 2,
                                  md: 2,
                                  sm: 6,
                                  xs: 0,
                                },
                              }}
                            />
                          </Button>
                        </CardMedia>
                        <CardContent>
                          <Typography
                            variant='h4'
                            component='div'
                            color='text.primary'
                            sx={{
                              fontSize: {
                                xl: 30,
                                lg: 30,
                                md: 30,
                                sm: 20,
                              },
                              textAlign: 'center',
                            }}
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
                                  xl: '6.5rem',
                                  lg: '6rem',
                                  md: '6rem',
                                  sm: '5rem',
                                  xs: '5rem',
                                },
                                mt: 2,
                              }}
                            />
                          </Button>
                        </CardMedia>
                        <CardContent>
                          <Typography
                            variant='h4'
                            component='div'
                            color='text.primary'
                            sx={{
                              fontSize: {
                                xl: 30,
                                lg: 30,
                                md: 30,
                                sm: 20,
                              },
                              textAlign: 'center',
                            }}
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
                                  xl: '6.5rem',
                                  lg: '6rem',
                                  md: '6rem',
                                  sm: '5rem',
                                  xs: '5rem',
                                },
                                mt: 2,
                              }}
                            />
                          </Button>
                        </CardMedia>
                        <CardContent>
                          <Typography
                            variant='h4'
                            component='div'
                            color='text.primary'
                            sx={{
                              fontSize: {
                                xl: 30,
                                lg: 30,
                                md: 30,
                                sm: 20,
                              },
                              textAlign: 'center',
                            }}
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
