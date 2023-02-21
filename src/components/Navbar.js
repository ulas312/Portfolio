import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Logo from '../assets/logo.png';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  MenuItem,
  Menu,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link
          style={{ color: 'inherit', textDecoration: 'inherit' }}
          to='/profile '
        >
          <Typography
            variant='h6'
            color='inherit'
            component='div'
            sx={{ mr: 2 }}
          >
            Profile
          </Typography>
        </Link>
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>
        <Link
          style={{ color: 'inherit', textDecoration: 'inherit' }}
          to='/login'
        >
          <Typography
            variant='h6'
            color='inherit'
            component='div'
            sx={{ mr: 2 }}
          >
            Login
          </Typography>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link
          style={{ color: 'inherit', textDecoration: 'inherit' }}
          to='/register'
        >
          <Typography
            variant='h6'
            color='inherit'
            component='div'
            sx={{ mr: 2 }}
          >
            Register
          </Typography>
        </Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>
          <Typography>Home</Typography>
        </Link>
        <Link to='/about' style={{ color: 'black', textDecoration: 'none' }}>
          <Typography>About</Typography>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to='/skills' style={{ color: 'black', textDecoration: 'none' }}>
          <Typography>Skills</Typography>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          to='/experience'
          style={{ color: 'black', textDecoration: 'none' }}
        >
          <Typography>Experience</Typography>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to='/projects' style={{ color: 'black', textDecoration: 'none' }}>
          <Typography>Projects</Typography>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to='/contact' style={{ color: 'black', textDecoration: 'none' }}>
          <Typography>Contact</Typography>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='absolute'
        style={{ background: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar>
          <Link to='/'>
            <Box
              component='img'
              sx={{
                ml: 1,
                mt: 2,
                height: 90,
                width: 200,
              }}
              alt='logo.'
              src={Logo}
            />
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <MenuItem>
              <Button
                style={{
                  color: 'primary',
                  textDecoration: 'none',
                  fontSize: 25,
                }}
                to='/'
                component={Link}
              >
                Home
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                style={{
                  color: 'primary',
                  textDecoration: 'none',
                  fontSize: 25,
                }}
                to='/about'
                component={Link}
              >
                About
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                style={{
                  color: 'primary',
                  textDecoration: 'none',
                  fontSize: 25,
                }}
                to='/skills'
                component={Link}
              >
                Skills
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                style={{
                  color: 'primary',
                  textDecoration: 'none',
                  fontSize: 25,
                }}
                to='/experience'
                component={Link}
              >
                Experience
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                style={{
                  color: 'primary',
                  textDecoration: 'none',
                  fontSize: 25,
                }}
                to='/projects'
                component={Link}
              >
                Projects
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                style={{
                  color: 'primary',
                  textDecoration: 'none',
                  fontSize: 25,
                }}
                to='/contact'
                component={Link}
              >
                Contact
              </Button>
            </MenuItem>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MenuIcon color='primary' />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
