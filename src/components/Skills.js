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
            top: '10vh',
            left: {
              xl: '33rem',
              lg: '17rem',
              md: '10rem',
              sm: '4rem',
              xs: '-6rem',
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
            sx={{ width: '600px' }}
            className='about-text'
            variant='h5'
            align='center'
          >
            Hover over the icons for names
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
                  mt: 4,
                  mb: 2,
                  fontSize: {
                    xl: '3rem',
                    lg: '3rem',
                    md: '3rem',
                    sm: '2rem',
                    xs: '2rem',
                  },
                }}
                variant='h3'
                component='div'
              >
                Frontend:
              </Typography>

              <List component={Stack} direction='row'>
                <BootstrapTooltip title='HTML'>
                  <Box
                    component='img'
                    src={HTMLIcon}
                    alt='HTML icon'
                    sx={{
                      width: {
                        xl: '6rem',
                        lg: '3.5rem',
                        md: '6rem',
                        sm: '6rem',
                        xs: '6rem',
                      },
                      mx: 1,
                      mt: 2,
                      mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>

                <BootstrapTooltip title='CSS'>
                  <Box
                    component='img'
                    src={CSSIcon}
                    alt='CSS icon'
                    sx={{
                      width: {
                        xl: '6rem',
                        lg: '3.5rem',
                        md: '6rem',
                        sm: '6rem',
                        xs: '6rem',
                      },
                      mx: 1,
                      mt: 2,
                      mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>

                <BootstrapTooltip title='SASS'>
                  <Box
                    component='img'
                    src={SASSIcon}
                    alt='SASS icon'
                    sx={{
                      width: {
                        xl: '6rem',
                        lg: '3.5rem',
                        md: '6rem',
                        sm: '6rem',
                        xs: '6rem',
                      },
                      mx: 1,
                      mt: 2,
                      mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip title='JavaScript'>
                  <Box
                    component='img'
                    src={SASSIcon}
                    alt='SASS icon'
                    sx={{
                      width: {
                        xl: '6rem',
                        lg: '3.5rem',
                        md: '6rem',
                        sm: '6rem',
                        xs: '6rem',
                      },
                      mx: 1,
                      mt: 2,
                      mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip title='react'>
                  <Box
                    component='img'
                    src={SASSIcon}
                    alt='SASS icon'
                    sx={{
                      width: {
                        xl: '6rem',
                        lg: '3.5rem',
                        md: '6rem',
                        sm: '6rem',
                        xs: '6rem',
                      },
                      mx: 1,
                      mt: 2,
                      mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip title='material ui'>
                  <Box
                    component='img'
                    src={SASSIcon}
                    alt='SASS icon'
                    sx={{
                      width: {
                        xl: '6rem',
                        lg: '3.5rem',
                        md: '6rem',
                        sm: '6rem',
                        xs: '6rem',
                      },
                      mx: 1,
                      mt: 2,
                      mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip title='bulma'>
                  <Box
                    component='img'
                    src={SASSIcon}
                    alt='SASS icon'
                    sx={{
                      width: {
                        xl: '6rem',
                        lg: '3.5rem',
                        md: '6rem',
                        sm: '6rem',
                        xs: '6rem',
                      },
                      mx: 1,
                      mt: 2,
                      mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt: 4,
                  mb: 2,
                  fontSize: {
                    xl: '3rem',
                    lg: '3rem',
                    md: '3rem',
                    sm: '2rem',
                    xs: '2rem',
                  },
                }}
                variant='h3'
                component='div'
              >
                Backend:
              </Typography>
              <List component={Stack} direction='row'>
                <BootstrapTooltip title='nodejs'>
                  <Box
                    component='img'
                    src={SASSIcon}
                    alt='SASS icon'
                    sx={{
                      width: {
                        xl: '6rem',
                        lg: '3.5rem',
                        md: '6rem',
                        sm: '6rem',
                        xs: '6rem',
                      },
                      mx: 1,
                      mt: 2,
                      mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip title='mongodb'>
                  <Box
                    component='img'
                    src={SASSIcon}
                    alt='SASS icon'
                    sx={{
                      width: {
                        xl: '6rem',
                        lg: '3.5rem',
                        md: '6rem',
                        sm: '6rem',
                        xs: '6rem',
                      },
                      mx: 1,
                      mt: 2,
                      mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip title='express'>
                  <Box
                    component='img'
                    src={SASSIcon}
                    alt='SASS icon'
                    sx={{
                      width: {
                        xl: '6rem',
                        lg: '3.5rem',
                        md: '6rem',
                        sm: '6rem',
                        xs: '6rem',
                      },
                      mx: 1,
                      mt: 2,
                      mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip title='python'>
                  <Box
                    component='img'
                    src={SASSIcon}
                    alt='SASS icon'
                    sx={{
                      width: {
                        xl: '6rem',
                        lg: '3.5rem',
                        md: '6rem',
                        sm: '6rem',
                        xs: '6rem',
                      },
                      mx: 1,
                      mt: 2,
                      mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip title='django'>
                  <Box
                    component='img'
                    src={SASSIcon}
                    alt='SASS icon'
                    sx={{
                      width: {
                        xl: '6rem',
                        lg: '3.5rem',
                        md: '6rem',
                        sm: '6rem',
                        xs: '6rem',
                      },
                      mx: 1,
                      mt: 2,
                      mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip title='sql'>
                  <Box
                    component='img'
                    src={SASSIcon}
                    alt='SASS icon'
                    sx={{
                      width: {
                        xl: '6rem',
                        lg: '3.5rem',
                        md: '6rem',
                        sm: '6rem',
                        xs: '6rem',
                      },
                      mx: 1,
                      mt: 2,
                      mb: 0.5,
                    }}
                  />
                </BootstrapTooltip>
                <BootstrapTooltip title='postgresql'>
                  <Box
                    component='img'
                    src={SASSIcon}
                    alt='SASS icon'
                    sx={{
                      width: {
                        xl: '6rem',
                        lg: '3.5rem',
                        md: '6rem',
                        sm: '6rem',
                        xs: '6rem',
                      },
                      mx: 1,
                      mt: 2,
                      mb: 0.5,
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
                  mt: 4,
                  mb: 2,
                  fontSize: {
                    xl: '3rem',
                    lg: '3rem',
                    md: '3rem',
                    sm: '2rem',
                    xs: '2rem',
                  },
                }}
                variant='h3'
                component='div'
              >
                Other:
              </Typography>
              <List component={Stack} direction='row'>
                <ListItem>
                  <BootstrapTooltip title='git'>
                    <Box
                      component='img'
                      src={SASSIcon}
                      alt='SASS icon'
                      sx={{
                        width: {
                          xl: '6rem',
                          lg: '3.5rem',
                          md: '6rem',
                          sm: '6rem',
                          xs: '6rem',
                        },
                        mx: 1,
                        mt: 2,
                        mb: 0.5,
                      }}
                    />
                  </BootstrapTooltip>
                  <BootstrapTooltip title='github'>
                    <Box
                      component='img'
                      src={SASSIcon}
                      alt='SASS icon'
                      sx={{
                        width: {
                          xl: '6rem',
                          lg: '3.5rem',
                          md: '6rem',
                          sm: '6rem',
                          xs: '6rem',
                        },
                        mx: 1,
                        mt: 2,
                        mb: 0.5,
                      }}
                    />
                  </BootstrapTooltip>
                  <BootstrapTooltip title='api'>
                    <Box
                      component='img'
                      src={SASSIcon}
                      alt='SASS icon'
                      sx={{
                        width: {
                          xl: '6rem',
                          lg: '3.5rem',
                          md: '6rem',
                          sm: '6rem',
                          xs: '6rem',
                        },
                        mx: 1,
                        mt: 2,
                        mb: 0.5,
                      }}
                    />
                  </BootstrapTooltip>
                  <BootstrapTooltip title='restful api'>
                    <Box
                      component='img'
                      src={SASSIcon}
                      alt='SASS icon'
                      sx={{
                        width: {
                          xl: '6rem',
                          lg: '3.5rem',
                          md: '6rem',
                          sm: '6rem',
                          xs: '6rem',
                        },
                        mx: 1,
                        mt: 2,
                        mb: 0.5,
                      }}
                    />
                  </BootstrapTooltip>
                  <BootstrapTooltip title='vscode'>
                    <Box
                      component='img'
                      src={SASSIcon}
                      alt='SASS icon'
                      sx={{
                        width: {
                          xl: '6rem',
                          lg: '3.5rem',
                          md: '6rem',
                          sm: '6rem',
                          xs: '6rem',
                        },
                        mx: 1,
                        mt: 2,
                        mb: 0.5,
                      }}
                    />
                  </BootstrapTooltip>
                  <BootstrapTooltip title='shopify'>
                    <Box
                      component='img'
                      src={SASSIcon}
                      alt='SASS icon'
                      sx={{
                        width: {
                          xl: '6rem',
                          lg: '3.5rem',
                          md: '6rem',
                          sm: '6rem',
                          xs: '6rem',
                        },
                        mx: 1,
                        mt: 2,
                        mb: 0.5,
                      }}
                    />
                  </BootstrapTooltip>
                  <BootstrapTooltip title='wordpress'>
                    <Box
                      component='img'
                      src={SASSIcon}
                      alt='SASS icon'
                      sx={{
                        width: {
                          xl: '6rem',
                          lg: '3.5rem',
                          md: '6rem',
                          sm: '6rem',
                          xs: '6rem',
                        },
                        mx: 1,
                        mt: 2,
                        mb: 0.5,
                      }}
                    />
                  </BootstrapTooltip>
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mt: 4,
                  mb: 2,
                  fontSize: {
                    xl: '3rem',
                    lg: '3rem',
                    md: '3rem',
                    sm: '2rem',
                    xs: '2rem',
                  },
                }}
                variant='h3'
                component='div'
              >
                Design & Marketing:
              </Typography>
              <List component={Stack} direction='row'>
                <ListItem>
                  <BootstrapTooltip title='figma'>
                    <Box
                      component='img'
                      src={SASSIcon}
                      alt='SASS icon'
                      sx={{
                        width: {
                          xl: '6rem',
                          lg: '3.5rem',
                          md: '6rem',
                          sm: '6rem',
                          xs: '6rem',
                        },
                        mx: 1,
                        mt: 2,
                        mb: 0.5,
                      }}
                    />
                  </BootstrapTooltip>
                  <BootstrapTooltip title='illustrator'>
                    <Box
                      component='img'
                      src={SASSIcon}
                      alt='SASS icon'
                      sx={{
                        width: {
                          xl: '6rem',
                          lg: '3.5rem',
                          md: '6rem',
                          sm: '6rem',
                          xs: '6rem',
                        },
                        mx: 1,
                        mt: 2,
                        mb: 0.5,
                      }}
                    />
                  </BootstrapTooltip>
                  <BootstrapTooltip title='photoshop'>
                    <Box
                      component='img'
                      src={SASSIcon}
                      alt='SASS icon'
                      sx={{
                        width: {
                          xl: '6rem',
                          lg: '3.5rem',
                          md: '6rem',
                          sm: '6rem',
                          xs: '6rem',
                        },
                        mx: 1,
                        mt: 2,
                        mb: 0.5,
                      }}
                    />
                  </BootstrapTooltip>
                  <BootstrapTooltip title='xd'>
                    <Box
                      component='img'
                      src={SASSIcon}
                      alt='SASS icon'
                      sx={{
                        width: {
                          xl: '6rem',
                          lg: '3.5rem',
                          md: '6rem',
                          sm: '6rem',
                          xs: '6rem',
                        },
                        mx: 1,
                        mt: 2,
                        mb: 0.5,
                      }}
                    />
                  </BootstrapTooltip>
                  <BootstrapTooltip title='canva'>
                    <Box
                      component='img'
                      src={SASSIcon}
                      alt='SASS icon'
                      sx={{
                        width: {
                          xl: '6rem',
                          lg: '3.5rem',
                          md: '6rem',
                          sm: '6rem',
                          xs: '6rem',
                        },
                        mx: 1,
                        mt: 2,
                        mb: 0.5,
                      }}
                    />
                  </BootstrapTooltip>
                  <BootstrapTooltip title='trello'>
                    <Box
                      component='img'
                      src={SASSIcon}
                      alt='SASS icon'
                      sx={{
                        width: {
                          xl: '6rem',
                          lg: '3.5rem',
                          md: '6rem',
                          sm: '6rem',
                          xs: '6rem',
                        },
                        mx: 1,
                        mt: 2,
                        mb: 0.5,
                      }}
                    />
                  </BootstrapTooltip>
                  <BootstrapTooltip title='google analytics '>
                    <Box
                      component='img'
                      src={GoogleIcon}
                      alt='Google icon'
                      sx={{
                        width: {
                          xl: '6rem',
                          lg: '3.5rem',
                          md: '6rem',
                          sm: '6rem',
                          xs: '6rem',
                        },
                        mx: 1,
                        mt: 2,
                        mb: 0.5,
                      }}
                    />
                  </BootstrapTooltip>
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} md={12}>
              <Typography
                sx={{
                  // mt: 1,
                  mb: 1,
                  fontSize: {
                    xl: '2.2rem',
                    lg: '2rem',
                    md: '2.2rem',
                    sm: '2.2rem',
                    xs: '2.2rem',
                  },
                }}
                variant='h5'
                component='div'
              >
                <u>Currently learning: TypeScript.</u>
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  mb: 1,
                  fontSize: {
                    xl: '2.2rem',
                    lg: '2rem',
                    md: '2.2rem',
                    sm: '2.2rem',
                    xs: '2.2rem',
                  },
                }}
                variant='h5'
                component='div'
              >
                <u>Business skills:</u> Startup, business operations, marketing,
                team management, customer experience.
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  mb: 1,
                  fontSize: {
                    xl: '2.2rem',
                    lg: '2rem',
                    md: '2.2rem',
                    sm: '2.2rem',
                    xs: '2.2rem',
                  },
                }}
                variant='h5'
                component='div'
              >
                <u>Languages:</u> Bilingual, fluent in English as well as
                Turkish.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Grid>
  );
}

export default Skills;
