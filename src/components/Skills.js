import React from 'react';
import Image from '../assets/skills-background.png';
import apiIcon from '../assets/api.svg';
import RestAPIIcon from '../assets/rest-api.svg';
import SqlIcon from '../assets/sql.svg';
import ShopifyIcon from '../assets/shopify.svg';
import GoogleIcon from '../assets/google-analytics.svg';

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
        <Typography
          className='about-text'
          variant='h1'
          align='center'
          sx={{
            position: 'absolute',
            top: '10vh',
            left: '39vw',
            justify: 'center',
          }}
        >
          Skills
        </Typography>
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
              <Typography sx={{ mt: 4, mb: 2 }} variant='h3' component='div'>
                Frontend:
              </Typography>

              <List component={Stack} direction='row'>
                <BootstrapTooltip title='HTML'>
                  <Button>
                    <i
                      class='devicon-html5-plain'
                      style={{ fontSize: '100px' }}
                    ></i>
                  </Button>
                </BootstrapTooltip>
                <BootstrapTooltip title='CSS'>
                  <Button>
                    <i
                      class='devicon-css3-plain'
                      style={{ fontSize: '100px' }}
                    ></i>
                  </Button>
                </BootstrapTooltip>
                <BootstrapTooltip title='SASS'>
                  <Button>
                    <i
                      class='devicon-sass-original'
                      style={{ fontSize: '110px' }}
                    ></i>
                  </Button>
                </BootstrapTooltip>
                <BootstrapTooltip title='JavaScript'>
                  <Button>
                    <i
                      class='devicon-javascript-plain'
                      style={{ fontSize: '100px' }}
                    ></i>
                  </Button>
                </BootstrapTooltip>
                <BootstrapTooltip title='react'>
                  <Button>
                    <i
                      class='devicon-react-original'
                      style={{ fontSize: '100px' }}
                    ></i>
                  </Button>
                </BootstrapTooltip>
                <BootstrapTooltip title='material ui'>
                  <Button>
                    <i
                      class='devicon-materialui-plain'
                      style={{ fontSize: '100px' }}
                    ></i>
                  </Button>
                </BootstrapTooltip>
                <BootstrapTooltip title='bulma'>
                  <Button>
                    <i
                      class='devicon-bulma-plain'
                      style={{ fontSize: '100px' }}
                    ></i>
                  </Button>
                </BootstrapTooltip>
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography sx={{ mt: 4, mb: 2 }} variant='h3' component='div'>
                Backend:
              </Typography>
              <List component={Stack} direction='row'>
                <BootstrapTooltip title='nodejs'>
                  <Button>
                    <i
                      class='devicon-nodejs-plain'
                      style={{ fontSize: '100px' }}
                    ></i>
                  </Button>
                </BootstrapTooltip>
                <BootstrapTooltip title='mongodb'>
                  <Button>
                    <i
                      class='devicon-mongodb-plain'
                      style={{ fontSize: '100px' }}
                    ></i>
                  </Button>
                </BootstrapTooltip>
                <BootstrapTooltip title='express'>
                  <Button>
                    <i
                      class='devicon-express-original'
                      style={{ fontSize: '100px' }}
                    ></i>
                  </Button>
                </BootstrapTooltip>
                <BootstrapTooltip title='python'>
                  <Button>
                    <i
                      class='devicon-python-plain'
                      style={{ fontSize: '100px' }}
                    ></i>
                  </Button>
                </BootstrapTooltip>
                <BootstrapTooltip title='django'>
                  <Button>
                    <i
                      class='devicon-django-plain'
                      style={{ fontSize: '100px' }}
                    ></i>
                  </Button>
                </BootstrapTooltip>
                <BootstrapTooltip title='sql'>
                  <Button>
                    <img
                      src={SqlIcon}
                      alt='api icon'
                      style={{ width: '100px' }}
                    />
                  </Button>
                </BootstrapTooltip>
                <BootstrapTooltip title='postgresql'>
                  <Button>
                    <i
                      class='devicon-postgresql-plain'
                      style={{ fontSize: '100px' }}
                    ></i>
                  </Button>
                </BootstrapTooltip>
              </List>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography sx={{ mt: 4, mb: 2 }} variant='h3' component='div'>
                Other:
              </Typography>
              <List component={Stack} direction='row'>
                <ListItem>
                  <BootstrapTooltip title='git'>
                    <Button>
                      <i
                        class='devicon-git-plain'
                        style={{ fontSize: '100px' }}
                      ></i>
                    </Button>
                  </BootstrapTooltip>
                  <BootstrapTooltip title='github'>
                    <Button>
                      <i
                        class='devicon-github-original'
                        style={{ fontSize: '100px' }}
                      ></i>
                    </Button>
                  </BootstrapTooltip>
                  <BootstrapTooltip title='api'>
                    <Button>
                      <img
                        src={apiIcon}
                        alt='api icon'
                        style={{ width: '100px' }}
                      />
                    </Button>
                  </BootstrapTooltip>
                  <BootstrapTooltip title='restful api'>
                    <Button>
                      <img
                        src={RestAPIIcon}
                        alt='api icon'
                        style={{ width: '100px' }}
                      />
                    </Button>
                  </BootstrapTooltip>
                  <BootstrapTooltip title='vscode'>
                    <Button>
                      <i
                        class='devicon-vscode-plain'
                        style={{ fontSize: '100px' }}
                      ></i>
                    </Button>
                  </BootstrapTooltip>
                  <BootstrapTooltip title='shopify'>
                    <Button>
                      <img
                        src={ShopifyIcon}
                        alt='api icon'
                        style={{ width: '100px' }}
                      />
                    </Button>
                  </BootstrapTooltip>
                  <BootstrapTooltip title='wordpress'>
                    <Button>
                      <i
                        class='devicon-wordpress-plain'
                        style={{ fontSize: '100px' }}
                      ></i>
                    </Button>
                  </BootstrapTooltip>
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography sx={{ mt: 4, mb: 2 }} variant='h3' component='div'>
                Design & Marketing:
              </Typography>
              <List component={Stack} direction='row'>
                <ListItem>
                  <BootstrapTooltip title='figma'>
                    <Button>
                      <i
                        class='devicon-figma-plain'
                        style={{ fontSize: '100px' }}
                      ></i>
                    </Button>
                  </BootstrapTooltip>
                  <BootstrapTooltip title='illustrator'>
                    <Button>
                      <i
                        class='devicon-illustrator-plain'
                        style={{ fontSize: '100px' }}
                      ></i>
                    </Button>
                  </BootstrapTooltip>
                  <BootstrapTooltip title='photoshop'>
                    <Button>
                      <i
                        class='devicon-photoshop-plain'
                        style={{ fontSize: '100px' }}
                      ></i>
                    </Button>
                  </BootstrapTooltip>
                  <BootstrapTooltip title='xd'>
                    <Button>
                      <i
                        class='devicon-xd-plain'
                        style={{ fontSize: '100px' }}
                      ></i>
                    </Button>
                  </BootstrapTooltip>
                  <BootstrapTooltip title='canva'>
                    <Button>
                      <i
                        class='devicon-canva-original'
                        style={{ fontSize: '100px' }}
                      ></i>
                    </Button>
                  </BootstrapTooltip>
                  <BootstrapTooltip title='trello'>
                    <Button>
                      <i
                        class='devicon-trello-plain'
                        style={{ fontSize: '100px' }}
                      ></i>
                    </Button>
                  </BootstrapTooltip>
                  <BootstrapTooltip title='google analytics '>
                    <Button>
                      <img
                        src={GoogleIcon}
                        alt='api icon'
                        style={{ width: '100px' }}
                      />
                    </Button>
                  </BootstrapTooltip>
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} md={12}>
              <Typography sx={{ mt: 4, mb: 2 }} variant='h5' component='div'>
                <u>Currently learning:</u> TypeScript.
              </Typography>
              <Typography sx={{ mt: 4, mb: 2 }} variant='h5' component='div'>
                <u>Business skills:</u> Startup, business operations, marketing,
                team management, customer experience.
              </Typography>
              <Typography sx={{ mt: 4, mb: 2 }} variant='h5' component='div'>
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
