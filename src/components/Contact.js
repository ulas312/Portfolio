import React from 'react';
import '../styles/Contact.scss';
import Image from '../assets/contact-background.png';
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
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <Grid container component='main'>
      <img className='hero-image' src={Image} alt='background pattern' />
      <Box
        alignItems='center'
        justifyContent='center'
        style={{ width: '90vw' }}
        sx={{
          position: 'absolute',
          height: '70vh',
          top: '25vh',
          left: '10%',
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

              <Box sx={{ flexGrow: 1, maxWidth: 600 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <List>
                      <Card
                        sx={{ height: 690, width: 500, ml: 4 }}
                        style={{ backgroundColor: 'transparent' }}
                      >
                        <CardMedia
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: 'auto',
                            width: 250,
                            mx: 15,
                            mb: 1,
                            // maxHeight: { xs: 233, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                          }}
                        >
                          <Button
                            // textalign='center'
                            href=''
                            target='_blank'
                          >
                            <EmailIcon sx={{ fontSize: '100px' }} />
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
                            height: 'auto',
                            width: 250,
                            mx: 15,
                            mt: 2,
                            mb: 1,
                            // maxHeight: { xs: 233, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                          }}
                        >
                          <Button
                            textalign='center'
                            href='https://github.com/ulas312'
                            target='_blank'
                          >
                            <i
                              class='devicon-github-original'
                              style={{
                                fontSize: '100px',
                                marginRight: 50,
                                marginLeft: 50,
                              }}
                            ></i>
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
                            height: 'auto',
                            width: 250,
                            mx: 15,
                            mt: 2,
                            mb: 1,
                            // maxHeight: { xs: 233, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                          }}
                        >
                          <Button
                            textalign='center'
                            href='https://www.linkedin.com/in/ulastemel/'
                            target='_blank'
                          >
                            <i
                              class='devicon-linkedin-plain'
                              style={{
                                fontSize: '100px',
                                marginRight: 50,
                                marginLeft: 50,
                              }}
                            ></i>
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
