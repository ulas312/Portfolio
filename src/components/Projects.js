import React, { Component } from 'react';
import '../styles/Projects.scss';
import BGImage from '../assets/projects-background.png';
import fbiIcon from '../assets/fbi-icon.svg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Image } from 'antd';

import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  styled,
  Box,
  Typography,
  List,
  Stack,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const contentStyle = {
  height: '640px',
  textAlign: 'center',
};

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '30px',
  [theme.breakpoints.up('md')]: {
    fontSize: '35px',
  },
};

theme.typography.p = {
  fontSize: '18px',
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
          <Typography
            className='about-text'
            variant='h1'
            align='center'
            sx={{
              position: 'absolute',
              top: {
                xl: '10vh',
                lg: '10vh',
                md: '9vh',
                sm: '9vh',
                xs: '9vh',
              },
              left: {
                xl: '44vw',
                lg: '43vw',
                md: '30vh',
                sm: '27vh',
                xs: '17vh',
              },
              justify: 'center',
              fontSize: {
                xl: '5rem',
                lg: '4rem',
                md: '5rem',
                sm: '4rem',
                xs: '3rem',
              },
            }}
          >
            projects
          </Typography>
          <Box
            alignItems='center'
            justifyContent='center'
            style={{ width: '90vw' }}
            sx={{
              position: 'absolute',
              height: '70vh',
              left: {
                xl: '4vw',
                lg: '4vw',
                md: '3vh',
                sm: '2vh',
                xs: '2vh',
              },
              top: {
                xl: '19vh',
                lg: '18vh',
                md: '18vh',
                sm: '16vh',
                xs: '15vh',
              },
              pt: 1,
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
                            justifyContent: 'center',
                            mx: 3,
                            my: 2,
                            display: {
                              xl: 'block',
                              lg: 'block',
                              md: 'block',
                              sm: 'none',
                              xs: 'none',
                            },
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
                              sx={{
                                fontSize: {
                                  xl: '6rem',
                                  lg: '6rem',
                                  md: '6rem',
                                  sm: '6rem',
                                  xs: '5rem',
                                },
                              }}
                            >
                              Snkr Closet
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: {
                                  xl: '1.3rem',
                                  lg: '1.3rem',
                                  md: '1.3rem',
                                  sm: '1.3rem',
                                  xs: '1.2rem',
                                },
                              }}
                              gutterBottom
                              className='card-text'
                              variant='h5'
                              color='text.secondary'
                            >
                              Solo - 7 day time frame. The project started when
                              our daughter was born, due to this I only had 5
                              days left to finish the project before the
                              deadline.
                            </Typography>
                            <Typography
                              className='card-text'
                              variant='p'
                              color='text.secondary'
                              sx={{
                                fontSize: {
                                  xl: '1.3rem',
                                  lg: '1.3rem',
                                  md: '1.3rem',
                                  sm: '1.3rem',
                                  xs: '1.2rem',
                                },
                              }}
                            >
                              The brief for this project was to build a
                              full-stack application by making our own backend
                              using Python Django REST Framework to serve our
                              data from a Postgres database with authentication
                              and a React frontend to consume the API data. I
                              chose to create an instagram like app for sneaker
                              collectors.
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
                        <List
                          component={Stack}
                          direction='row'
                          sx={{
                            display: {
                              xl: 'block',
                              lg: 'block',
                              md: 'block',
                              sm: 'block',
                              xs: 'block',
                            },
                          }}
                        >
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
                            justifyContent: 'center',
                            mx: 3,
                            my: 2,
                            display: {
                              xl: 'block',
                              lg: 'block',
                              md: 'block',
                              sm: 'none',
                              xs: 'none',
                            },
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
                              sx={{
                                fontSize: {
                                  xl: '6rem',
                                  lg: '6rem',
                                  md: '6rem',
                                  sm: '6rem',
                                  xs: '5rem',
                                },
                              }}
                            >
                              Full Stacked
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: {
                                  xl: '1.3rem',
                                  lg: '1.3rem',
                                  md: '1.3rem',
                                  sm: '1.3rem',
                                  xs: '1.2rem',
                                },
                              }}
                              gutterBottom
                              className='card-text'
                              variant='h5'
                              color='text.secondary'
                            >
                              Team of 3 - completed over 7 days.
                            </Typography>

                            <Typography
                              className='card-text'
                              variant='p'
                              color='text.secondary'
                              sx={{
                                fontSize: {
                                  xl: '1.3rem',
                                  lg: '1.3rem',
                                  md: '1.3rem',
                                  sm: '1.3rem',
                                  xs: '1.2rem',
                                },
                              }}
                            >
                              The brief for this project was to build a
                              full-stack application by using React and making
                              our own backend using the MERN stack with JWT
                              Tokens, relationships and validation. For the
                              backend, my tasks were creating the functionality
                              for login and register with validation with
                              bcrypt, secure routes using JSON Web Token and
                              string testers with RegExr. For the Frontend, I
                              was tasked with creating the Home page, activity
                              log, account page as well as the navbar and I also
                              created a MUI theme to make customising components
                              easier. I also created mock templates of the app
                              with Adobe Illustrator to have images to work off.
                              We chose to create a fitness workout/exercise
                              directory app.
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
                        <List
                          component={Stack}
                          direction='row'
                          sx={{
                            display: {
                              xl: 'block',
                              lg: 'block',
                              md: 'block',
                              sm: 'block',
                              xs: 'block',
                            },
                          }}
                        >
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
                            justifyContent: 'center',
                            mx: 3,
                            my: 2,
                            display: {
                              xl: 'block',
                              lg: 'block',
                              md: 'block',
                              sm: 'none',
                              xs: 'none',
                            },
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
                              sx={{
                                fontSize: {
                                  xl: '6rem',
                                  lg: '6rem',
                                  md: '6rem',
                                  sm: '6rem',
                                  xs: '5rem',
                                },
                              }}
                            >
                              FBI Most Wanted
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: {
                                  xl: '1.3rem',
                                  lg: '1.3rem',
                                  md: '1.3rem',
                                  sm: '1.3rem',
                                  xs: '1.2rem',
                                },
                              }}
                              gutterBottom
                              className='card-text'
                              variant='h5'
                              color='text.secondary'
                            >
                              Team of 2 - completed over 2 days.
                            </Typography>
                            <Typography
                              className='card-text'
                              variant='p'
                              color='text.secondary'
                              sx={{
                                fontSize: {
                                  xl: '1.3rem',
                                  lg: '1.3rem',
                                  md: '1.3rem',
                                  sm: '1.3rem',
                                  xs: '1.2rem',
                                },
                              }}
                            >
                              The brief for this project was to build a
                              full-stack application by consuming a public API,
                              have several components and have a router. The
                              tasks I took on were creating the navbar/footer,
                              home page, the suspect information page that
                              pulled in the information from the FBI API we
                              used. I also created mock templates of the app
                              with Adobe Illustrator to have images to work off.
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
                            mx: 3,
                            my: 2,
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
                            >
                              Space Invaders
                            </Typography>
                            <Typography
                              gutterBottom
                              className='card-text'
                              variant='h5'
                              color='text.secondary'
                            >
                              Solo - completed over 7 days.
                            </Typography>
                            <Typography
                              className='card-text'
                              variant='p'
                              color='text.secondary'
                            >
                              The brief for this project was to build an in
                              browser game which included separate files for
                              HTML / CSS / JavaScript and to use JavaScript to
                              manipulate the DOM. I chose to rebuild a
                              grid-based version of my favourite arcade classic
                              game, Space Invaders.
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
        </Grid>
      </div>
    );
  }
}
