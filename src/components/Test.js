import React, { Component } from 'react';
import '../styles/Projects.scss';

import BGImage from '../assets/experience-background.png';
import GaLogo from '../assets/ga-logo.png';
import ZezesLogo from '../assets/zezes-logo.png';
import PrintLogo from '../assets/312-logo.png';

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
  ListItem,
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Home() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Grid container component='main'>
        <img className='hero-image' src={BGImage} alt='background pattern' />
        {/* <div
            style={{
              position: 'absolute',
              left: '5%',
            }}
          > */}
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
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
          // style={{ minHeight: '100vh' }}
        >
          <Grid
            item
            xs={3}
            sx={{
              position: 'absolute',
              top: {
                xl: '20vh',
                lg: '15vh',
                md: '9vh',
                sm: '9vh',
                xs: '9vh',
              },
            }}
          >
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1bh-content'
                id='panel1bh-header'
              >
                <Box
                  component='img'
                  sx={{
                    height: 200,
                    width: 200,
                    mr: 5,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                  }}
                  alt='The house from the offer.'
                  src='https://seeklogo.com/images/G/general-assembly-logo-D5C634F07A-seeklogo.com.png'
                />
                {/* <Typography sx={{ width: '33%', flexShrink: 0 }}>
          General Assembly
          </Typography> */}
                <Typography sx={{ color: 'text.secondary' }}>
                  General Assembly
                  <Typography>Software Engineering Immersive.</Typography>
                  <Typography>Oct 2022 - Jan 2023 - London, Remote.</Typography>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
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
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1bh-content'
                id='panel1bh-header'
              >
                <Box
                  component='img'
                  sx={{
                    height: 200,
                    width: 200,
                    mr: 5,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                  }}
                  alt='The house from the offer.'
                  src='https://seeklogo.com/images/G/general-assembly-logo-D5C634F07A-seeklogo.com.png'
                />
                {/* <Typography sx={{ width: '33%', flexShrink: 0 }}>
          General Assembly
          </Typography> */}
                <Typography sx={{ color: 'text.secondary' }}>
                  General Assembly
                  <Typography>Software Engineering Immersive.</Typography>
                  <Typography>Oct 2022 - Jan 2023 - London, Remote.</Typography>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
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
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1bh-content'
                id='panel1bh-header'
              >
                <Box
                  component='img'
                  sx={{
                    height: 200,
                    width: 200,
                    mr: 5,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                  }}
                  alt='The house from the offer.'
                  src='https://seeklogo.com/images/G/general-assembly-logo-D5C634F07A-seeklogo.com.png'
                />
                {/* <Typography sx={{ width: '33%', flexShrink: 0 }}>
          General Assembly
          </Typography> */}
                <Typography sx={{ color: 'text.secondary' }}>
                  General Assembly
                  <Typography>Software Engineering Immersive.</Typography>
                  <Typography>Oct 2022 - Jan 2023 - London, Remote.</Typography>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
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
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
