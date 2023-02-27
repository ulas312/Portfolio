import * as React from 'react';

import '../styles/Experience.scss';
import BGImage from '../assets/experience-background.png';
import GaLogo from '../assets/ga-logo.png';
import ZezesLogo from '../assets/zezes-logo.png';
import PrintLogo from '../assets/312-logo.png';

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
  ListItem,
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Experience() {
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
          experience
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
                      xl: 200,
                      lg: 200,
                      md: 200,
                      sm: 200,
                      xs: 120,
                    },
                    width: {
                      xl: 200,
                      lg: 200,
                      md: 200,
                      sm: 200,
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
                  alt='General Assembly Logo'
                  src={GaLogo}
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
                  General Assembly
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
                    Software Engineering Immersive.
                  </Typography>
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
                    Oct 2022 - Jan 2023 - London, Remote.
                  </Typography>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
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
                  Throughout the 12-week intensive course and the 450+ hours of
                  homework, I covered multiple modules on full stack development
                  and ended up with a project at the end to test and demonstrate
                  my knowledge.
                  <ListItem sx={{ display: 'list-item' }}>
                    Developed full-stack applications using React, MongoDB,
                    Express, Node.js, Python/Django, and PostgreSQL.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    Honed skills in JavaScript, HTML, and CSS.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    Successfully delivered solo, pair, and group projects within
                    deadlines by following agile development practices and
                    participating in daily stand-ups working remotely over Zoom
                    and Slack.
                  </ListItem>
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
                      xl: 200,
                      lg: 200,
                      md: 200,
                      sm: 200,
                      xs: 120,
                    },
                    width: {
                      xl: 200,
                      lg: 200,
                      md: 200,
                      sm: 200,
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
                  alt='Zezes Logo'
                  src={ZezesLogo}
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
                  Zeze's Mediterranean
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
                    Co-founder & Head of Marketing.
                  </Typography>
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
                    May 2020 - Oct 2022 - Swanage, Dorset.
                  </Typography>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    width: '95%',
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
                  <ListItem sx={{ display: 'list-item' }}>
                    Designing, building and maintaining the business website
                    that was mobile and tablet responsive which had consistent
                    visitor growth over the duration of the business.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    Promoting the business through various online and offline
                    channels which increased overall bookings by 50%.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    Ensured effective communication channels were in place by
                    collaborating with customers and team members to address
                    inquiries, coordinate schedules, and maintain customer
                    satisfaction.
                  </ListItem>
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
                      xl: 200,
                      lg: 200,
                      md: 200,
                      sm: 200,
                      xs: 120,
                    },
                    width: {
                      xl: 200,
                      lg: 200,
                      md: 200,
                      sm: 200,
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
                  alt='312 Logo'
                  src={PrintLogo}
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
                  312 Studios
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
                    Co-founder & Head of Operations.
                  </Typography>
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
                    Jan 2018 - Feb 2020 - Poole, Dorset.
                  </Typography>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    width: '95%',
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
                  <ListItem sx={{ display: 'list-item' }}>
                    Dealing directly with clients, creating design briefs from
                    their needs making sure timeframes and deadlines were
                    achieved.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    Gained hands-on experience in all aspects of graphics and
                    design from manufacturing, large format printing, vehicle
                    wrapping and fitting to digital marketing seo and websites.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    Within a short amount of time I quickly learnt new programs
                    and how to effectively use them for my needs and become
                    competent enough to run all the printers and necessary
                    softwares on Windows computers.
                  </ListItem>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
