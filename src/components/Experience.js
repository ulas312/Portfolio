import React from 'react';
import '../styles/Experience.scss';
import Image from '../assets/experience-background.png';
import GaLogo from '../assets/ga-logo.png';
import ZezesLogo from '../assets/zezes-logo.png';
import PrintLogo from '../assets/312-logo.png';

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  ListItem,
  Box,
  Typography,
} from '@mui/material';

function Experience() {
  return (
    <Grid container component='main'>
      <img className='hero-image' src={Image} alt='background pattern' />
      <div
        style={{
          position: 'absolute',
          left: '5%',
          paddingTop: 20,
          paddingBottom: 0,
        }}
      >
        <Typography
          className='about-text'
          variant='h1'
          align='center'
          sx={{
            position: 'absolute',
            top: '10vh',
            left: '40vw',
            justify: 'center',
            fontSize: '4rem',
          }}
        >
          experience
        </Typography>
        <Box
          // className='a2'
          alignItems='center'
          justifyContent='center'
          style={{ width: '90vw' }}
          sx={{
            pt: {
              xl: '12rem',
              lg: '12rem',
              md: '15rem',
              sm: '13rem',
              xs: '11rem',
            },
            px: {
              xl: '2rem',
              lg: '2rem',
              md: '2rem',
              sm: '2rem',
              xs: '2rem',
            },
            pb: {
              xl: '2rem',
              lg: '2rem',
              md: '2rem',
              sm: '2rem',
              xs: '2rem',
            },
          }}
          // sx={{
          //   position: 'absolute',
          //   height: '70vh',
          //   top: '25vh',
          // }}
        >
          <Grid sx={{ flexGrow: 1 }}>
            <Grid
              item
              container
              spacing={{ xs: 2, md: 3 }}
              // columns={{ xs: 4, sm: 8, md: 12, lg: 1 }}
            >
              <Grid container justifyContent='center'>
                <Card
                  sx={{
                    height: 690,
                    width: {
                      xl: '28.125rem',
                      lg: '26rem',
                      md: '28.125rem',
                      sm: '28.125rem',
                      xs: '31.25rem',
                    },
                    mr: 2,
                    ml: 2,
                    mb: 2,
                  }}
                >
                  <CardMedia
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      height: 'auto',
                      width: {
                        xl: '10.25rem',
                        lg: '10.25rem',
                        md: '10.25rem',
                        sm: '10.25rem',
                        xs: '8rem',
                      },
                      mx: {
                        xl: 16,
                        lg: 16,
                        md: 17,
                        sm: 16,
                        xs: 9,
                      },
                      mt: 2,
                      mb: 1,
                    }}
                    component='img'
                    alt='General Assembly logo'
                    image={GaLogo}
                  />
                  <CardContent>
                    <Typography
                      variant='h3'
                      component='div'
                      color='text.secondary'
                      sx={{ fontSize: 35 }}
                    >
                      <u>General Assembly</u>
                    </Typography>
                    <Typography
                      variant='h4'
                      component='div'
                      color='text.secondary'
                      sx={{ fontSize: 30 }}
                    >
                      Software Engineering Immersive.
                    </Typography>
                    <Typography
                      variant='h4'
                      component='div'
                      color='text.secondary'
                      sx={{ fontSize: 26 }}
                    >
                      Oct 2022 - Jan 2023 - London, Remote.
                    </Typography>
                    <Typography
                      className='experience-text'
                      variant='p'
                      color='text.secondary'
                      gutterBottom
                    >
                      Throughout the 12-week intensive course and the 450+ hours
                      of homework, I covered multiple modules on full stack
                      development and ended up with a project at the end to test
                      and demonstrate my knowledge.
                      <ListItem sx={{ display: 'list-item' }}>
                        Developed full-stack applications using React, MongoDB,
                        Express, Node.js, Python/Django, and PostgreSQL.
                      </ListItem>
                      <ListItem sx={{ display: 'list-item' }}>
                        Honed skills in JavaScript, HTML, and CSS.
                      </ListItem>
                      <ListItem sx={{ display: 'list-item' }}>
                        Successfully delivered solo, pair, and group projects
                        within deadlines by following agile development
                        practices and participating in daily stand-ups working
                        remotely over Zoom and Slack.
                      </ListItem>
                    </Typography>
                  </CardContent>
                </Card>

                <Card
                  sx={{
                    height: 690,
                    width: {
                      xl: '28.125rem',
                      lg: '26rem',
                      md: '28.125rem',
                      sm: '28.125rem',
                      xs: '31.25rem',
                    },
                    mx: 2,
                    ml: 2,
                    mb: 2,
                  }}
                >
                  <CardMedia
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      height: 'auto',
                      width: {
                        xl: '11.25rem',
                        lg: '11.25rem',
                        md: '11.25rem',
                        sm: '11.25rem',
                        xs: '9rem',
                      },
                      mx: {
                        xl: 16,
                        lg: 16,
                        md: 17,
                        sm: 16,
                        xs: 9,
                      },
                      mt: 2,
                      mb: 1,
                    }}
                    component='img'
                    alt='Zezes logo'
                    image={ZezesLogo}
                  />
                  <CardContent>
                    <Typography
                      variant='h3'
                      component='div'
                      color='text.secondary'
                      sx={{ fontSize: 35 }}
                    >
                      <u>Zeze's Mediterranean</u>
                    </Typography>
                    <Typography
                      variant='h4'
                      component='div'
                      color='text.secondary'
                      sx={{ fontSize: 30 }}
                    >
                      Co-founder & Head of Marketing.
                    </Typography>
                    <Typography
                      variant='h4'
                      component='div'
                      color='text.secondary'
                      sx={{ fontSize: 26 }}
                    >
                      May 2020 - Oct 2022 - Swanage, Dorset.
                    </Typography>
                    <Typography
                      className='experience-text'
                      variant='p'
                      color='text.secondary'
                    >
                      <ListItem sx={{ display: 'list-item' }}>
                        Designing, building and maintaining the business website
                        that was mobile and tablet responsive which had
                        consistent visitor growth over the duration of the
                        business.
                      </ListItem>
                      <ListItem sx={{ display: 'list-item' }}>
                        Promoting the business through various online and
                        offline channels which increased overall bookings by
                        50%.
                      </ListItem>
                      <ListItem sx={{ display: 'list-item' }}>
                        Ensured effective communication channels were in place
                        by collaborating with customers and team members to
                        address inquiries, coordinate schedules, and maintain
                        customer satisfaction.
                      </ListItem>
                    </Typography>
                  </CardContent>
                </Card>

                <Card
                  sx={{
                    height: 690,
                    width: {
                      xl: '28.125rem',
                      lg: '26rem',
                      md: '28.125rem',
                      sm: '28.125rem',
                      xs: '31.25rem',
                    },
                    mr: 2,
                    ml: 2,
                    mb: 2,
                  }}
                >
                  <CardMedia
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      height: 'auto',
                      width: {
                        xl: '11.25rem',
                        lg: '11.25rem',
                        md: '11.25rem',
                        sm: '11.25rem',
                        xs: '9rem',
                      },
                      mx: {
                        xl: 16,
                        lg: 16,
                        md: 17,
                        sm: 16,
                        xs: 9,
                      },
                      mt: 2,
                      mb: 1,
                    }}
                    component='img'
                    alt='312 logo'
                    image={PrintLogo}
                  />
                  <CardContent>
                    <Typography
                      variant='h3'
                      component='div'
                      color='text.secondary'
                      sx={{ fontSize: 35 }}
                    >
                      <u>312 Studios</u>
                    </Typography>
                    <Typography
                      variant='h4'
                      component='div'
                      color='text.secondary'
                      sx={{ fontSize: 30 }}
                    >
                      Co-founder & Head of Operations.
                    </Typography>
                    <Typography
                      variant='h4'
                      component='div'
                      color='text.secondary'
                      sx={{ fontSize: 26 }}
                    >
                      Jan 2018 - Feb 2020 - Poole, Dorset.
                    </Typography>
                    <Typography
                      className='experience-text'
                      variant='p'
                      color='text.secondary'
                    >
                      <ListItem sx={{ display: 'list-item' }}>
                        Dealing directly with clients, creating design briefs
                        from their needs making sure timeframes and deadlines
                        were achieved.
                      </ListItem>
                      <ListItem sx={{ display: 'list-item' }}>
                        Gained hands-on experience in all aspects of graphics
                        and design from manufacturing, large format printing,
                        vehicle wrapping and fitting to digital marketing seo
                        and websites.
                      </ListItem>
                      <ListItem sx={{ display: 'list-item' }}>
                        Within a short amount of time I quickly learnt new
                        programs and how to effectively use them for my needs
                        and become competent enough to run all the printers and
                        necessary softwares on Windows computers.
                      </ListItem>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Grid>
  );
}

export default Experience;
