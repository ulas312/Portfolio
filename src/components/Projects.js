import React, { Component } from 'react';
import '../styles/Projects.scss';
import BGImage from '../assets/projects-background.png';
import fbiIcon from '../assets/fbi-icon.svg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Carousel, Col, Row, Image } from 'antd';

import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  styled,
  MobileStepper,
  Box,
  Typography,
  List,
  Stack,
  IconButton,
  createTheme,
  ThemeProvider,
  Avatar,
} from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const contentStyle = {
  height: '640px',
  // color: '#fff',
  textAlign: 'center',
};

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '30px',
  '@media (min-width:600px)': {
    fontSize: '32px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '35px',
  },
};

theme.typography.p = {
  fontSize: '18px',
  '@media (min-width:600px)': {
    fontSize: '20px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '23px',
  },
};

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.secondary.main,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'theme.palette.secondary',
    fontSize: theme.typography.pxToRem(40),
  },
}));

export default class Projects extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        <Grid container component='main'>
          <img className='hero-image' src={BGImage} alt='background pattern' />
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
              projects
            </Typography>
            <Box
              // className='a1'
              alignItems='center'
              justifyContent='center'
              style={{ width: '90vw' }}
              sx={{
                position: 'absolute',
                height: '70vh',
                top: '20vh',
                pt: 2,
              }}
            >
              <Slider {...settings}>
                <div>
                  <h3 style={contentStyle}>
                    <Grid container spacing={2}>
                      <Card sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item xs={6} md={6}>
                          <CardMedia
                            sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              // height: 'auto',
                              // width: 250,
                              mx: 3,
                              my: 2,
                              // mb: 1,
                              // maxHeight: { xs: 233, md: 167 },
                              // maxWidth: { xs: 350, md: 250 },
                            }}
                          >
                            <Image
                              height={640}
                              width={'auto'}
                              src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Q4M2E2YjVkYTcyNGUzZWY4MGZjNjEwNTVlZjkzOWYzY2YzNzRjZSZjdD1n/FiqP92DzPISSvmE9BR/giphy.gif'
                            />
                          </CardMedia>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          md={6}
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                          sx={{
                            mr: 4,
                          }}
                        >
                          <CardContent>
                            <ThemeProvider theme={theme}>
                              <Typography
                                variant='h3'
                                component='div'
                                color='text.secondary'
                                // sx={{ fontSize: 35 }}
                              >
                                Snkr Closet
                              </Typography>
                              <Typography
                                gutterBottom
                                className='card-text'
                                variant='h5'
                                color='text.secondary'
                                // sx={{ fontSize: 20 }}
                              >
                                Solo - 7 day time frame. The day the project
                                started our baby girl was born, due to this I
                                only had 5 days to finish before the deadline.
                              </Typography>
                              <Typography
                                className='card-text'
                                variant='p'
                                color='text.secondary'
                                // sx={{ fontSize: 20 }}
                              >
                                The brief for this project was to build a
                                full-stack application by making our own backend
                                using Python Django REST Framework to serve our
                                data from a Postgres database with
                                authentication and a React frontend to consume
                                the API data. I chose to create an instagram
                                like app for sneaker collectors.
                              </Typography>
                            </ThemeProvider>
                          </CardContent>
                          <CardActions style={{ justifyContent: 'center' }}>
                            <Button
                              sx={{ fontSize: 25, mr: 6 }}
                              target='_blank'
                              color='secondary'
                              variant='contained'
                              size='large'
                              href='https://snker-closet-frontend.netlify.app/'
                            >
                              view project
                            </Button>
                            <Button
                              sx={{ fontSize: 25 }}
                              target='_blank'
                              color='secondary'
                              variant='contained'
                              size='large'
                              href='https://github.com/ulas312/ga-project-4-client'
                            >
                              Repo
                            </Button>
                          </CardActions>
                          <List component={Stack} direction='row'>
                            <BootstrapTooltip title='react'>
                              <Button>
                                <i
                                  class='devicon-react-original colored'
                                  style={{ fontSize: '80px' }}
                                ></i>
                              </Button>
                            </BootstrapTooltip>
                            <BootstrapTooltip title='SASS'>
                              <Button>
                                <i
                                  class='devicon-sass-original colored'
                                  style={{ fontSize: '110px' }}
                                ></i>
                              </Button>
                            </BootstrapTooltip>
                            <BootstrapTooltip title='express'>
                              <Button>
                                <i
                                  class='devicon-express-original colored'
                                  style={{ fontSize: '80px' }}
                                ></i>
                              </Button>
                            </BootstrapTooltip>
                            <BootstrapTooltip title='nodejs'>
                              <Button>
                                <i
                                  class='devicon-nodejs-plain colored'
                                  style={{ fontSize: '80px' }}
                                ></i>
                              </Button>
                            </BootstrapTooltip>
                            <BootstrapTooltip title='mongodb'>
                              <Button>
                                <i
                                  class='devicon-mongodb-plain colored'
                                  style={{ fontSize: '80px' }}
                                ></i>
                              </Button>
                            </BootstrapTooltip>
                            <BootstrapTooltip title='material ui'>
                              <Button>
                                <i
                                  class='devicon-materialui-plain colored'
                                  style={{ fontSize: '80px' }}
                                ></i>
                              </Button>
                            </BootstrapTooltip>
                          </List>
                        </Grid>
                      </Card>
                    </Grid>
                  </h3>
                </div>

                <div>
                  <h3 style={contentStyle}>
                    <Grid container spacing={2}>
                      <Card sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item xs={6} md={6}>
                          <CardMedia
                            sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              // height: 'auto',
                              // width: 250,
                              mx: 3,
                              my: 2,
                              // mb: 1,
                              // maxHeight: { xs: 233, md: 167 },
                              // maxWidth: { xs: 350, md: 250 },
                            }}
                          >
                            <Image
                              height={640}
                              width={'auto'}
                              src='https://i.postimg.cc/BQ8nb2dL/Screenshot-2023-02-14-at-00-47-08.png'
                            />
                          </CardMedia>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          md={6}
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                          sx={{
                            mr: 4,
                          }}
                        >
                          <CardContent>
                            <ThemeProvider theme={theme}>
                              <Typography
                                variant='h3'
                                component='div'
                                color='text.secondary'
                                // sx={{ fontSize: 35 }}
                              >
                                Full Stacked
                              </Typography>
                              <Typography
                                gutterBottom
                                className='card-text'
                                variant='h5'
                                color='text.secondary'
                                // sx={{ fontSize: 20 }}
                              >
                                Team of 3 - completed over 7 days.
                              </Typography>

                              <Typography
                                className='card-text'
                                variant='p'
                                color='text.secondary'
                                // sx={{ fontSize: 20 }}
                              >
                                The brief for this project was to build a
                                full-stack application by using React and making
                                our own backend using the MERN stack with JWT
                                Tokens, relationships and validation. For the
                                backend, my tasks were creating the
                                functionality for login and register with
                                validation with bcrypt, secure routes using JSON
                                Web Token and string testers with RegExr. For
                                the Frontend, I was tasked with creating the
                                Home page, activity log, account page as well as
                                the navbar and I also created a MUI theme to
                                make customising components easier. I also
                                created mock templates of the app with Adobe
                                Illustrator to have images to work off. We chose
                                to create a fitness workout/exercise directory
                                app.
                              </Typography>
                            </ThemeProvider>
                          </CardContent>
                          <CardActions style={{ justifyContent: 'center' }}>
                            <Button
                              sx={{ fontSize: 25, mr: 6 }}
                              target='_blank'
                              color='secondary'
                              variant='contained'
                              size='large'
                              href='https://fullstacked-frontend.netlify.app/'
                            >
                              view project
                            </Button>
                            <Button
                              sx={{ fontSize: 25 }}
                              target='_blank'
                              color='secondary'
                              variant='contained'
                              size='large'
                              href='https://github.com/ulas312/ga-project-3-frontend'
                            >
                              Repo
                            </Button>
                          </CardActions>
                          <List component={Stack} direction='row'>
                            <BootstrapTooltip title='react'>
                              <Button>
                                <i
                                  class='devicon-react-original colored'
                                  style={{ fontSize: '80px' }}
                                ></i>
                              </Button>
                            </BootstrapTooltip>
                            <BootstrapTooltip title='SASS'>
                              <Button>
                                <i
                                  class='devicon-sass-original colored'
                                  style={{ fontSize: '110px' }}
                                ></i>
                              </Button>
                            </BootstrapTooltip>
                            <BootstrapTooltip title='django'>
                              <Button>
                                <i
                                  class='devicon-django-plain colored'
                                  style={{ fontSize: '80px' }}
                                ></i>
                              </Button>
                            </BootstrapTooltip>
                            <BootstrapTooltip title='postgresql'>
                              <Button>
                                <i
                                  class='devicon-postgresql-plain colored'
                                  style={{ fontSize: '80px' }}
                                ></i>
                              </Button>
                            </BootstrapTooltip>
                            <BootstrapTooltip title='material ui'>
                              <Button>
                                <i
                                  class='devicon-materialui-plain colored'
                                  style={{ fontSize: '80px' }}
                                ></i>
                              </Button>
                            </BootstrapTooltip>
                          </List>
                        </Grid>
                      </Card>
                    </Grid>
                  </h3>
                </div>

                <div>
                  <h3 style={contentStyle}>
                    <Grid container spacing={2}>
                      <Card sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item xs={6} md={6}>
                          <CardMedia
                            sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              // height: 'auto',
                              // width: 250,
                              mx: 3,
                              my: 2,
                              // mb: 1,
                              // maxHeight: { xs: 233, md: 167 },
                              // maxWidth: { xs: 350, md: 250 },
                            }}
                          >
                            <Image
                              height={640}
                              width={'auto'}
                              src='https://media.giphy.com/media/CE4VViV6bihyw9slD1/giphy.gif'
                            />
                          </CardMedia>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          md={6}
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                          sx={{
                            mr: 4,
                          }}
                        >
                          <CardContent>
                            <ThemeProvider theme={theme}>
                              <Typography
                                variant='h3'
                                component='div'
                                color='text.secondary'
                                // sx={{ fontSize: 35 }}
                              >
                                FBI Most Wanted
                              </Typography>
                              <Typography
                                gutterBottom
                                className='card-text'
                                variant='h5'
                                color='text.secondary'
                                // sx={{ fontSize: 20 }}
                              >
                                Team of 2 - completed over 2 days.
                              </Typography>
                              <Typography
                                className='card-text'
                                variant='p'
                                color='text.secondary'
                                // sx={{ fontSize: 20 }}
                              >
                                The brief for this project was to build a
                                full-stack application by consuming a public
                                API, have several components and have a router.
                                The tasks I took on were creating the
                                navbar/footer, home page, the suspect
                                information page that pulled in the information
                                from the FBI API we used. I also created mock
                                templates of the app with Adobe Illustrator to
                                have images to work off.
                              </Typography>
                            </ThemeProvider>
                          </CardContent>
                          <CardActions style={{ justifyContent: 'center' }}>
                            <Button
                              sx={{ fontSize: 25, mr: 6 }}
                              target='_blank'
                              color='secondary'
                              variant='contained'
                              size='large'
                              href='https://fbi-mostwanted.netlify.app/'
                            >
                              view project
                            </Button>
                            <Button
                              sx={{ fontSize: 25 }}
                              target='_blank'
                              color='secondary'
                              variant='contained'
                              size='large'
                              href='https://github.com/ulas312/ga-project-2'
                            >
                              Repo
                            </Button>
                          </CardActions>
                          <List component={Stack} direction='row'>
                            <BootstrapTooltip title='react'>
                              <Button>
                                <i
                                  class='devicon-react-original colored'
                                  style={{ fontSize: '80px' }}
                                ></i>
                              </Button>
                            </BootstrapTooltip>
                            <BootstrapTooltip title='SASS'>
                              <Button>
                                <i
                                  class='devicon-sass-original colored'
                                  style={{ fontSize: '110px' }}
                                ></i>
                              </Button>
                            </BootstrapTooltip>
                            <BootstrapTooltip title='FBI API'>
                              <Button>
                                <img
                                  src={fbiIcon}
                                  alt='api icon'
                                  style={{ width: '80px' }}
                                />
                              </Button>
                            </BootstrapTooltip>
                            <BootstrapTooltip title='bulma'>
                              <Button>
                                <i
                                  class='devicon-bulma-plain colored'
                                  style={{ fontSize: '80px' }}
                                ></i>
                              </Button>
                            </BootstrapTooltip>
                          </List>
                        </Grid>
                      </Card>
                    </Grid>
                  </h3>
                </div>

                <div>
                  <h3 style={contentStyle}>
                    <Grid container spacing={2}>
                      <Card sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item xs={6} md={6}>
                          <CardMedia
                            sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              // height: 'auto',
                              // width: 250,
                              mx: 3,
                              my: 2,
                              // mb: 1,
                              // maxHeight: { xs: 233, md: 167 },
                              // maxWidth: { xs: 350, md: 250 },
                            }}
                          >
                            <Image
                              height={640}
                              width={'auto'}
                              src='https://media.giphy.com/media/25p2OUAhuKIENRAK3x/giphy.gif'
                            />
                          </CardMedia>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          md={6}
                          container
                          spacing={0}
                          direction='column'
                          alignItems='center'
                          justifyContent='center'
                          sx={{
                            mr: 4,
                          }}
                        >
                          <CardContent>
                            <ThemeProvider theme={theme}>
                              <Typography
                                variant='h3'
                                component='div'
                                color='text.secondary'
                                // sx={{ fontSize: 35 }}
                              >
                                Space Invaders
                              </Typography>
                              <Typography
                                gutterBottom
                                className='card-text'
                                variant='h5'
                                color='text.secondary'
                                // sx={{ fontSize: 20 }}
                              >
                                Solo - completed over 7 days.
                              </Typography>
                              <Typography
                                className='card-text'
                                variant='p'
                                color='text.secondary'
                                // sx={{ fontSize: 20 }}
                              >
                                The brief for this project was to build a
                                full-stack application by making our own backend
                                using Python Django REST Framework to serve our
                                data from a Postgres database with
                                authentication and a React frontend to consume
                                the API data. I chose to create an instagram
                                like app for sneaker collectors.
                              </Typography>
                            </ThemeProvider>
                          </CardContent>
                          <CardActions style={{ justifyContent: 'center' }}>
                            <Button
                              sx={{ fontSize: 25, mr: 6 }}
                              target='_blank'
                              color='secondary'
                              variant='contained'
                              size='large'
                              href='https://ulas312.github.io/ga-project-1/'
                            >
                              view project
                            </Button>
                            <Button
                              sx={{ fontSize: 25 }}
                              target='_blank'
                              color='secondary'
                              variant='contained'
                              size='large'
                              href='https://github.com/ulas312/ga-project-1'
                            >
                              Repo
                            </Button>
                          </CardActions>
                          <List component={Stack} direction='row'>
                            <BootstrapTooltip title='HTML'>
                              <Button>
                                <i
                                  class='devicon-html5-plain colored'
                                  style={{ fontSize: '80px' }}
                                ></i>
                              </Button>
                            </BootstrapTooltip>
                            <BootstrapTooltip title='CSS'>
                              <Button>
                                <i
                                  class='devicon-css3-plain colored'
                                  style={{ fontSize: '80px' }}
                                ></i>
                              </Button>
                            </BootstrapTooltip>
                            <BootstrapTooltip title='JavaScript'>
                              <Button>
                                <i
                                  class='devicon-javascript-plain colored'
                                  style={{ fontSize: '80px' }}
                                ></i>
                              </Button>
                            </BootstrapTooltip>
                          </List>
                        </Grid>
                      </Card>
                    </Grid>
                  </h3>
                </div>
              </Slider>
            </Box>
          </div>
        </Grid>
      </div>
    );
  }
}
