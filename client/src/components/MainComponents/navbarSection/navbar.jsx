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


const pages = [ 'особенность', 'отзывы', 'примеры', 'о нас'];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [loginState, setLoginState] = React.useState(null)
  const loginOptions = localStorage.getItem('loginOptions')

   React.useEffect(() => {
        if (loginOptions) {
           setLoginState(true)
  
          
        }
   }, [loginOptions])



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
    const targetValue = e.target.textContent
    switch (targetValue) {
      case 'особенность':
        console.log('sdsdd');
        break;
      case 'отзывы': 

         break
      case 'примеры': 

         break
      case 'о нас': 

         break
       
      default:
        break;
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    console.log('handleCloseUserMenu');

  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
        <Tooltip href="/" title="logo" sx={{ display: { xs: 'none', md: 'flex' }, mr: 2}}>
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
              color: 'inherit',
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
          <Tooltip href="/" title="logo" sx={{ display: { xs: 'flex', md: 'none' }, mr: 2}}>
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
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SMART
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                href={'#' + page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

         
          {loginState ? <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> : <Link to={'/login'}> 
              <Button variant="contained" color="secondary" href='/login'>
          login
          </Button>
          
          </Link>}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;