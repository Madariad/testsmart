import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import axiosConfig from "../../axiosConfig";
import {Grid} from '@material-ui/core'

import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';



const pages = ['особенность', 'отзывы', 'примеры', 'о нас'];

const settings = ['профиль', 'список учиников и учителей', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [loginState, setLoginState] = React.useState(null);

  React.useEffect(() => {
    const handleCheckAuth = () => {
      const token = localStorage.getItem('token');
      if (token) {
        setLoginState(true);
      }
    };
  
    const intervalId = setInterval(handleCheckAuth, 500);
  
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    console.log('handleOpenNavMenu');
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    console.log('handleOpenUserMenu');
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
    const targetValue = e.target.textContent;
  }
  const log = async () => {
    try {
      const token = localStorage.getItem('token');
  
      await axiosConfig.post(
        '/api/v1/students/logout',
        {},
        {
          headers: {
            Authorization: token, 
          },
        }
      );
  
      localStorage.removeItem('token');
      window.location.reload();
      
    } catch (error) {
      console.log(error);
    }
  };
  
  

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    console.log('handleCloseUserMenu');
  };
  return (
    <AppBar position="sticky" color="transparent"  sx={{backdropFilter:"blur(20px)", top: '20px', width: '80%', left: '10%'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Tooltip href="/" title="logo" sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
            <Avatar alt="smart logo" src="../../images/logo.jpg" />
          </Tooltip>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#05f5a5',
              textDecoration: 'none',
            }}
          >
            SMART
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Tooltip href="/" title="logo" sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}>
            <Avatar alt="smart logo" src="../../images/logo.jpg" />
          </Tooltip>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.3rem',
              color: '#05f5a5',
              textDecoration: 'none',
            }}
          >
            SMART
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                    href={'/'}
                    style={{color: '#05f5a5'}}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#a342ff', display: 'block' }}
                  >
                    особенность
                  </Button>
                  <Button
                    href={'/'}
                    style={{color: '#05f5a5'}}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#a342ff', display: 'block' }}
                  >
                    отзывы
                  </Button>
                  <Button
                    href={'/'}
                    style={{color: '#05f5a5'}}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#a342ff', display: 'block' }}
                  >
                    примеры
                  </Button>
                  <Button
                    href={'/'}
                    style={{color: '#05f5a5'}}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#a342ff', display: 'block' }}
                  >
                    о нас
                  </Button>









            {/* {pages.map((page) => (
              <Button
                key={page}
                href={'#' + page}
                style={{color: '#05f5a5'}}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#a342ff', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          {loginState ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="../../public/images/beautiful-latin-woman-avatar.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >


                  <MenuItem >
                  <Link to={'/personList'} style={{textDecoration: 'none', color: '#3475D9'}}>
                  список учиников и учителей
                  </Link>
                  
                  </MenuItem>
                 <MenuItem onClick={log}>
                    <Typography textAlign="center" style={{color: '#3475D9'}}>logout</Typography>
                  </MenuItem>

                {/* {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))} */}
              </Menu>
            </Box>
          ) : (
            <Box sx={{display: 'flex', gap: '20px'}}>
                <Link to={'/teachers/login'}>
                  <Button variant="contained" color="secondary" href="/teachers/login">
                    я учитель
                  </Button>
                </Link>

                <Link to={'students/login'}>
                  <Button variant="contained" color="secondary" href="students/login">
                  я учиник
                  </Button>
                </Link>
            </Box>
            
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
