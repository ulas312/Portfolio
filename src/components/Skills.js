import React from 'react';
import Image from '../assets/skills-background.png';
import apiIcon from '../assets/api.svg';
import RestAPIIcon from '../assets/rest-api.svg';
import SqlIcon from '../assets/sql.svg';
import ShopifyIcon from '../assets/shopify.svg';
import GoogleIcon from '../assets/google-analytics.svg';
import HTMLIcon from '../assets/html.svg';
import CSSIcon from '../assets/css-icon.svg';
import SASSIcon from '../assets/sass-icon.svg';
import JSIcon from '../assets/js-icon.svg';
import ReactIcon from '../assets/react-icon.svg';
import MUIIcon from '../assets/mui-icon.svg';
import BulmaIcon from '../assets/bulma-icon.svg';
import NodeIcon from '../assets/node-icon.svg';
import MongoIcon from '../assets/mongodb-icon.svg';
import ExpressIcon from '../assets/express-icon.svg';
import PythonIcon from '../assets/python-icon.svg';
import DjangoIcon from '../assets/django-icon.svg';
import PostgresqlIcon from '../assets/postgresql-icon.svg';
import GitIcon from '../assets/git-icon.svg';
import GithubIcon from '../assets/github-icon.svg';
import VScodeIcon from '../assets/vscode-icon.svg';
import WordpressIcon from '../assets/wordpress-icon.svg';
import FigmaIcon from '../assets/figma-icon.svg';
import AIIcon from '../assets/illustrator-icon.svg';
import PSIcon from '../assets/photoshop-icon.svg';
import XDIcon from '../assets/xd-icon.svg';
import CanvaIcon from '../assets/canva-icon.svg';
import TrelloIcon from '../assets/trello-icon.svg';

import '../styles/Skills.scss';

import {
  Grid,
  List,
  ListItem,
  Button,
  Box,
  Typography,
  styled,
  Stack,
} from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

function Skills() {
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.secondary.main,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.secondary.main,
      fontSize: theme.typography.pxToRem(40),
    },
  }));

  return (
    <Grid container component='main'>
      <img className='hero-image' src={Image} alt='background pattern' />
      <div
        style={{
          position: 'absolute',
          left: '5%',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: {
              xl: '10vh',
              lg: '10vh',
              md: '9vh',
              sm: '7vh',
              xs: '9vh',
            },
            left: {
              xl: '38rem',
              lg: '26rem',
              md: '20rem',
              sm: '12rem',
              xs: '1.7rem',
            },
            justify: 'center',
          }}
        >
          <Typography
            className='about-text'
            variant='h1'
            align='center'
            sx={{
              fontSize: {
                xl: '5rem',
                lg: '5rem',
                md: '5rem',
                sm: '5rem',
                xs: '3rem',
              },
            }}
          >
            Skills
          </Typography>
          <Typography
            sx={{ width: '300px' }}
            className='about-text'
            variant='h6'
            align='center'
          >
            Hover or click over the icons for names
          </Typography>
        </Box>
        <Box
          alignItems='center'
          justifyContent='center'
          style={{ width: '90vw' }}
          sx={{
            position: 'absolute',
            height: '70vh',
            top: '22vh',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt: 1,
                  mb: 2,
                  fontSize: {
                    xl: '4rem',
                    lg: '3rem',
                    md: '2rem',
                    sm: '2rem',
                    xs: '1.6rem',
                  },
                }}
                variant='h3'
                component='div'
              >
                Frontend:
              </Typography>
              <List component={Stack} direction='row'>
                <BootstrapTooltip enterTouchDelay={0} title='HTML'>
                  <Box
                    component='img'
                    src={HTMLIcon}
                    alt='HTML icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>

                <BootstrapTooltip enterTouchDelay={0} title='CSS'>
                  <Box
                    component='img'
                    src={CSSIcon}
                    alt='CSS icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>

                <BootstrapTooltip enterTouchDelay={0} title='SASS'>
                  <Box
                    component='img'
                    src={SASSIcon}
                    alt='SASS icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='JavaScript'>
                  <Box
                    component='img'
                    src={JSIcon}
                    alt='JavaScript icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='React'>
                  <Box
                    component='img'
                    src={ReactIcon}
                    alt='React icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='material ui'>
                  <Box
                    component='img'
                    src={MUIIcon}
                    alt='Material UI icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='Bulma'>
                  <Box
                    component='img'
                    src={BulmaIcon}
                    alt='Bulma icon'
                    sx={{
                      width: {
                        xl: '5rem',
                        lg: '3.3rem',
                        md: '2.6rem',
                        sm: '3.9rem',
                        xs: '1.6rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt: 1,
                  mb: 1,
                  fontSize: {
                    xl: '4rem',
                    lg: '3rem',
                    md: '2rem',
                    sm: '2rem',
                    xs: '1.6rem',
                  },
                }}
                variant='h3'
                component='div'
              >
                Backend:
              </Typography>
              <List component={Stack} direction='row'>
                <BootstrapTooltip enterTouchDelay={0} title='nodejs'>
                  <Box
                    component='img'
                    src={NodeIcon}
                    alt='NodeJS icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='mongodb'>
                  <Box
                    component='img'
                    src={MongoIcon}
                    alt='mongodb icon'
                    sx={{
                      //  // width: {
                      //   xl: '6rem',
                      //   lg: '3.8rem',
                      //   md: '4rem',
                      //   sm: '4rem',
                      //   xs: '2rem',
                      // },
                      height: {
                        xl: '6rem',
                        lg: '3.8rem',
                        md: '4rem',
                        sm: '4.5rem',
                        xs: '2.5rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='express'>
                  <Box
                    component='img'
                    src={ExpressIcon}
                    alt='express icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='python'>
                  <Box
                    component='img'
                    src={PythonIcon}
                    alt='python icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='django'>
                  <Box
                    component='img'
                    src={DjangoIcon}
                    alt='django icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='sql'>
                  <Box
                    component='img'
                    src={SqlIcon}
                    alt='sql icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='postgresql'>
                  <Box
                    component='img'
                    src={PostgresqlIcon}
                    alt='postgresql icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
              </List>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt: 1,
                  mb: 1,
                  fontSize: {
                    xl: '4rem',
                    lg: '3rem',
                    md: '2rem',
                    sm: '2rem',
                    xs: '1.6rem',
                  },
                }}
                variant='h3'
                component='div'
              >
                Other:
              </Typography>
              <List component={Stack} direction='row'>
                <BootstrapTooltip enterTouchDelay={0} title='git'>
                  <Box
                    component='img'
                    src={GitIcon}
                    alt='git icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='github'>
                  <Box
                    component='img'
                    src={GithubIcon}
                    alt='GitHub icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='api'>
                  <Box
                    component='img'
                    src={apiIcon}
                    alt='API icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='restful api'>
                  <Box
                    component='img'
                    src={RestAPIIcon}
                    alt='restful icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='vscode'>
                  <Box
                    component='img'
                    src={VScodeIcon}
                    alt='vscode icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='shopify'>
                  <Box
                    component='img'
                    src={ShopifyIcon}
                    alt='shopify icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='wordpress'>
                  <Box
                    component='img'
                    src={WordpressIcon}
                    alt='wordpress icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt: 1,
                  mb: 2,
                  fontSize: {
                    xl: '4rem',
                    lg: '3rem',
                    md: '2rem',
                    sm: '2rem',
                    xs: '1.6rem',
                  },
                }}
                variant='h3'
                component='div'
              >
                Design & Marketing:
              </Typography>
              <List component={Stack} direction='row'>
                <BootstrapTooltip enterTouchDelay={0} title='figma'>
                  <Box
                    component='img'
                    src={FigmaIcon}
                    alt='figma icon'
                    sx={{
                      //  // width: {
                      //   xl: '6rem',
                      //   lg: '3.8rem',
                      //   md: '4rem',
                      //   sm: '4rem',
                      //   xs: '2rem',
                      // },
                      height: {
                        xl: '6rem',
                        lg: '3.8rem',
                        md: '4rem',
                        sm: '4.5rem',
                        xs: '2.5rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='illustrator'>
                  <Box
                    component='img'
                    src={AIIcon}
                    alt='illustrator icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='photoshop'>
                  <Box
                    component='img'
                    src={PSIcon}
                    alt='photoshop icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='xd'>
                  <Box
                    component='img'
                    src={XDIcon}
                    alt='xd icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='canva'>
                  <Box
                    component='img'
                    src={CanvaIcon}
                    alt='canva icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='trello'>
                  <Box
                    component='img'
                    src={TrelloIcon}
                    alt='trello icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip enterTouchDelay={0} title='google analytics '>
                  <Box
                    component='img'
                    src={GoogleIcon}
                    alt='Google icon'
                    sx={{
                      width: {
                        xl: '6.2rem',
                        lg: '4rem',
                        md: '3rem',
                        sm: '4.5rem',
                        xs: '2rem',
                      },
                      mx: 1,
                      // mt: 2,
                      // mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
              </List>
            </Grid>

            <Grid item xs={12} md={12}>
              <Typography
                sx={{
                  mt: 1,
                  mb: 1,
                  fontSize: {
                    xl: '1.8rem',
                    lg: '1.6rem',
                    md: '2rem',
                    sm: '1.5rem',
                    xs: '1.1rem',
                  },
                }}
                variant='h5'
                component='div'
              >
                <u>Currently learning:</u>{' '}
                <span className='skills-text'> TypeScript.</span>
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  mb: 1,
                  fontSize: {
                    xl: '1.8rem',
                    lg: '1.6rem',
                    md: '2rem',
                    sm: '1.5rem',
                    xs: '1.1rem',
                  },
                }}
                variant='h5'
                component='div'
              >
                <u>Business skills:</u>{' '}
                <span className='skills-text'>
                  Startup, business operations, marketing, team management,
                  customer experience.
                </span>
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  mb: 1,
                  fontSize: {
                    xl: '1.8rem',
                    lg: '1.6rem',
                    md: '2rem',
                    sm: '1.5rem',
                    xs: '1.1rem',
                  },
                }}
                variant='h5'
                component='div'
              >
                <u>Languages:</u>{' '}
                <span className='skills-text'>
                  Bilingual, fluent in English as well as Turkish.
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Grid>
  );
}

export default Skills;
