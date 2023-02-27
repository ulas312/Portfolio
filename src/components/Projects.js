import * as React from 'react';

import BGImage from '../assets/projects-background.png';
import fbiIcon from '../assets/fbi-icon.svg';

import {
  Grid,
  Box,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Button,
  Stack,
  styled,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

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

export default function Projects() {
  return (
    <div>
      <Grid container component='main'>
        <img className='hero-image' src={BGImage} alt='background pattern' />
        <Typography
          alignItems='center'
          justifyContent='center'
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
              xl: '4rem',
              lg: '4rem',
              md: '5rem',
              sm: '4rem',
              xs: '3rem',
            },
          }}
        >
          Projects
        </Typography>
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid
            item
            xs={3}
            sx={{
              position: 'absolute',
              top: {
                xl: '20vh',
                lg: '20vh',
                md: '17vh',
                sm: '18vh',
                xs: '18vh',
              },
            }}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Box
                  component='img'
                  sx={{
                    height: {
                      xl: 400,
                      lg: 300,
                      md: 300,
                      sm: 300,
                      xs: 120,
                    },
                    width: {
                      xl: 500,
                      lg: 400,
                      md: 400,
                      sm: 400,
                      xs: 120,
                    },
                    mr: 5,
                    mt: {
                      xl: 0,
                      lg: 0,
                      md: 0,
                      sm: 0,
                      xs: 4,
                    },
                  }}
                  alt='Snkr Closet website'
                  src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Q4M2E2YjVkYTcyNGUzZWY4MGZjNjEwNTVlZjkzOWYzY2YzNzRjZSZjdD1n/FiqP92DzPISSvmE9BR/giphy.gif'
                />
                <Typography
                  sx={{
                    mt: 3,
                    color: 'text.secondary',
                    fontSize: {
                      xl: 36,
                      lg: 35,
                      md: 36,
                      sm: 32,
                      xs: 25,
                    },
                  }}
                >
                  Snkr Closet
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: {
                        xl: 28,
                        lg: 27,
                        md: 28,
                        sm: 27,
                        xs: 19,
                      },
                    }}
                  >
                    Solo - 7 day time frame. The project started when our
                    daughter was born, due to this I only had 5 days left to
                    finish the project before the deadline.
                  </Typography>
                  <Button
                    sx={{ fontSize: 15, mr: 2, mt: 4 }}
                    target='_blank'
                    color='secondary'
                    variant='contained'
                    size='large'
                    href='https://snker-closet-frontend.netlify.app/'
                  >
                    Link
                  </Button>
                  <Button
                    sx={{ fontSize: 15, mt: 4 }}
                    target='_blank'
                    color='secondary'
                    variant='contained'
                    size='large'
                    href='https://github.com/ulas312/ga-project-4-frontend'
                  >
                    Repo
                  </Button>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    width: '100%',
                    color: 'text.secondary',
                    pb: 2,
                    fontSize: {
                      xl: 22,
                      lg: 20,
                      md: 20,
                      sm: 20,
                      xs: 16,
                    },
                  }}
                >
                  Snkr Closet - an Instagram style app for sneaker collectors
                  that gives the user their own profile page where they can see
                  information like how many posts, followers and people they are
                  following. They can also see their own sneaker posts. There is
                  a feed that anyone can see and view sneakers, see the
                  information uploaded and the comments section under each post.
                </Typography>
                <Typography
                  sx={{
                    width: '100%',
                    color: 'text.secondary',
                    fontSize: {
                      xl: 22,
                      lg: 20,
                      md: 20,
                      sm: 20,
                      xs: 16,
                    },
                  }}
                >
                  The brief for this project was to build a full-stack
                  application by making our own backend using Python Django REST
                  Framework to serve our data from a Postgres database with
                  authentication and a React frontend to consume the API data. I
                  chose to create an instagram like app for sneaker collectors.
                  <Box
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
                  </Box>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Box
                  component='img'
                  sx={{
                    height: {
                      xl: 400,
                      lg: 300,
                      md: 300,
                      sm: 300,
                      xs: 120,
                    },
                    width: {
                      xl: 500,
                      lg: 400,
                      md: 400,
                      sm: 400,
                      xs: 120,
                    },
                    mr: 5,
                    mt: {
                      xl: 0,
                      lg: 0,
                      md: 0,
                      sm: 0,
                      xs: 4,
                    },
                  }}
                  alt='Full stacked website'
                  src='https://i.postimg.cc/BQ8nb2dL/Screenshot-2023-02-14-at-00-47-08.png'
                />
                <Typography
                  sx={{
                    mt: 3,
                    color: 'text.secondary',
                    fontSize: {
                      xl: 36,
                      lg: 35,
                      md: 36,
                      sm: 32,
                      xs: 25,
                    },
                  }}
                >
                  Full Stacked
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: {
                        xl: 28,
                        lg: 27,
                        md: 28,
                        sm: 27,
                        xs: 19,
                      },
                    }}
                  >
                    Team of 3 - completed over 7 days.
                  </Typography>
                  <Button
                    sx={{ fontSize: 15, mr: 2, mt: 4 }}
                    target='_blank'
                    color='secondary'
                    variant='contained'
                    size='large'
                    href='https://fullstacked-frontend.netlify.app/'
                  >
                    Link
                  </Button>
                  <Button
                    sx={{ fontSize: 15, mt: 4 }}
                    target='_blank'
                    color='secondary'
                    variant='contained'
                    size='large'
                    href='https://github.com/ulas312/ga-project-3-frontend'
                  >
                    Repo
                  </Button>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    width: '100%',
                    color: 'text.secondary',
                    pb: 2,
                    fontSize: {
                      xl: 22,
                      lg: 20,
                      md: 20,
                      sm: 20,
                      xs: 16,
                    },
                  }}
                >
                  Full Stacked - a workout/exercise web app that allows users to
                  explore the workout directory, checkout workouts and
                  individual body part exercises as well as workout logging.
                </Typography>
                <Typography
                  sx={{
                    width: '100%',
                    color: 'text.secondary',
                    fontSize: {
                      xl: 22,
                      lg: 20,
                      md: 20,
                      sm: 20,
                      xs: 16,
                    },
                  }}
                >
                  The brief for this project was to build a full-stack
                  application by using React and making our own backend using
                  the MERN stack with JWT Tokens, relationships and validation.
                  For the backend, my tasks were creating the functionality for
                  login and register with validation with bcrypt, secure routes
                  using JSON Web Token and string testers with RegExr. For the
                  Frontend, I was tasked with creating the Home page, activity
                  log, account page as well as the navbar and I also created a
                  MUI theme to make customising components easier. I also
                  created mock templates of the app with Adobe Illustrator to
                  have images to work off. We chose to create a fitness
                  workout/exercise directory app.
                  <Box
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
                  </Box>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Box
                  component='img'
                  sx={{
                    height: {
                      xl: 400,
                      lg: 300,
                      md: 300,
                      sm: 300,
                      xs: 120,
                    },
                    width: {
                      xl: 500,
                      lg: 400,
                      md: 400,
                      sm: 400,
                      xs: 120,
                    },
                    mr: 5,
                    mt: {
                      xl: 0,
                      lg: 0,
                      md: 0,
                      sm: 0,
                      xs: 4,
                    },
                  }}
                  alt='FBI Most Wanted website'
                  src='https://media.giphy.com/media/CE4VViV6bihyw9slD1/giphy.gif'
                />
                <Typography
                  sx={{
                    mt: 3,
                    color: 'text.secondary',
                    fontSize: {
                      xl: 36,
                      lg: 35,
                      md: 36,
                      sm: 32,
                      xs: 25,
                    },
                  }}
                >
                  FBI Most Wanted
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: {
                        xl: 28,
                        lg: 27,
                        md: 28,
                        sm: 27,
                        xs: 19,
                      },
                    }}
                  >
                    Team of 2 - completed over 2 days.
                  </Typography>
                  <Button
                    sx={{ fontSize: 15, mr: 2, mt: 4 }}
                    target='_blank'
                    color='secondary'
                    variant='contained'
                    size='large'
                    href='https://fbi-mostwanted.netlify.app/'
                  >
                    Link
                  </Button>
                  <Button
                    sx={{ fontSize: 15, mt: 4 }}
                    target='_blank'
                    color='secondary'
                    variant='contained'
                    size='large'
                    href='https://github.com/ulas312/ga-project-2'
                  >
                    Repo
                  </Button>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    width: '100%',
                    color: 'text.secondary',
                    pb: 2,
                    fontSize: {
                      xl: 22,
                      lg: 20,
                      md: 20,
                      sm: 20,
                      xs: 16,
                    },
                  }}
                >
                  FBI’s Most Wanted - a web app that shows you the most wanted
                  fugitives in America consuming the FBI’s API. Once you click
                  on a suspect's card you open their information. You can see
                  what information the FBI holds on that person as well as some
                  links to download their wanted poster and where to submit a
                  tip if you have information concerning that person. There is
                  also a search and categories list to categorise their crimes.
                </Typography>
                <Typography
                  sx={{
                    width: '100%',
                    color: 'text.secondary',
                    fontSize: {
                      xl: 22,
                      lg: 20,
                      md: 20,
                      sm: 20,
                      xs: 16,
                    },
                  }}
                >
                  The brief for this project was to build a full-stack
                  application by consuming a public API, have several components
                  and have a router. The tasks I took on were creating the
                  navbar/footer, home page, the suspect information page that
                  pulled in the information from the FBI API we used. I also
                  created mock templates of the app with Adobe Illustrator to
                  have images to work off.
                  <Box
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
                  </Box>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Box
                  component='img'
                  sx={{
                    height: {
                      xl: 400,
                      lg: 300,
                      md: 300,
                      sm: 300,
                      xs: 120,
                    },
                    width: {
                      xl: 500,
                      lg: 400,
                      md: 400,
                      sm: 400,
                      xs: 120,
                    },
                    mr: 5,
                    mt: {
                      xl: 0,
                      lg: 0,
                      md: 0,
                      sm: 0,
                      xs: 4,
                    },
                  }}
                  alt='Space Invaders game'
                  src='https://media.giphy.com/media/25p2OUAhuKIENRAK3x/giphy.gif'
                />
                <Typography
                  sx={{
                    mt: 3,
                    color: 'text.secondary',
                    fontSize: {
                      xl: 36,
                      lg: 35,
                      md: 36,
                      sm: 32,
                      xs: 25,
                    },
                  }}
                >
                  Space Invaders
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: {
                        xl: 28,
                        lg: 27,
                        md: 28,
                        sm: 27,
                        xs: 19,
                      },
                    }}
                  >
                    Solo - completed over 7 days.
                  </Typography>
                  <Button
                    sx={{ fontSize: 15, mr: 2, mt: 4 }}
                    target='_blank'
                    color='secondary'
                    variant='contained'
                    size='large'
                    href='https://ulas312.github.io/ga-project-1/'
                  >
                    Link
                  </Button>
                  <Button
                    sx={{ fontSize: 15, mt: 4 }}
                    target='_blank'
                    color='secondary'
                    variant='contained'
                    size='large'
                    href='https://github.com/ulas312/ga-project-1'
                  >
                    Repo
                  </Button>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    width: '100%',
                    color: 'text.secondary',
                    pb: 2,
                    fontSize: {
                      xl: 22,
                      lg: 20,
                      md: 20,
                      sm: 20,
                      xs: 16,
                    },
                  }}
                >
                  Space Invaders is a classic arcade game from the 80s. The
                  player aims to shoot an invading alien armada, before it
                  reaches the planet's surface using a mounted gun turret. The
                  player can only move left or right. The aliens also move from
                  left to right, and also down each time they reach the side of
                  the screen. The aliens also periodically drop bombs towards
                  the player. Once the player has destroyed a wave of aliens,
                  the game starts again. The aim is to achieve the highest score
                  possible before either being destroyed by the aliens, or
                  allowing them to reach the planet's surface.
                </Typography>
                <Typography
                  sx={{
                    width: '100%',
                    color: 'text.secondary',
                    fontSize: {
                      xl: 22,
                      lg: 20,
                      md: 20,
                      sm: 20,
                      xs: 16,
                    },
                  }}
                >
                  The brief for this project was to build an in browser game
                  which included separate files for HTML / CSS / JavaScript and
                  to use JavaScript to manipulate the DOM. I chose to rebuild a
                  grid-based version of my favourite arcade classic game, Space
                  Invaders.
                  <Box
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
                  </Box>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
