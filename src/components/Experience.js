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
        }}
      >
        <Typography
          className='about-text'
          variant='h1'
          align='center'
          sx={{
            position: 'absolute',
            top: '10vh',
            left: '35vw',
            justify: 'center',
          }}
        >
          experience
        </Typography>
        <Box
          alignItems='center'
          justifyContent='center'
          style={{ width: '90vw' }}
          sx={{
            position: 'absolute',
            height: '70vh',
            top: '25vh',
          }}
        >
          <Grid sx={{ flexGrow: 1 }}>
            <Grid
              item
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid container justifyContent='center'>
                <Card sx={{ height: 690, width: 500, mr: 4 }}>
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
                    >
                      Throughout the 12 week intensive course and the 450+ hours
                      of homework, I learnt the fundamentals of full stack
                      development and covered multiple modules that ended up
                      with a project at the end to test and demonstrate my
                      knowledge. These projects varied from individual to pair
                      programming.
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ height: 690, width: 500, mx: 4 }}>
                  <CardMedia
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      height: 'auto',
                      width: 300,
                      mx: 12,
                      mt: 2,
                      mb: 1,
                      // maxHeight: { xs: 233, md: 167 },
                      // maxWidth: { xs: 350, md: 250 },
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
                        Ensuring an effective communication strategy was in
                        place.
                      </ListItem>
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ height: 690, width: 500, ml: 4 }}>
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
