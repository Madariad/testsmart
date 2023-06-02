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





// const pages = ['особенность', 'отзывы', 'примеры', 'о нас'];


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
             
             <MenuItem onClick={handleCloseNavMenu}>
                <a href="#features" style={{textDecoration: 'none', color: 'inherit'}}>
                     <Typography textAlign="center"> особенность</Typography>
                </a>          
                </MenuItem>



                <MenuItem onClick={handleCloseNavMenu}>
                <a href="#testimonal" style={{textDecoration: 'none', color: 'inherit'}}>
                     <Typography textAlign="center"> отзывы</Typography>
                </a>          
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                <a href="#exaple" style={{textDecoration: 'none', color: 'inherit'}}>
                     <Typography textAlign="center"> примеры</Typography>
                </a>          
                </MenuItem>


                <MenuItem onClick={handleCloseNavMenu}>
                <a href="#test" style={{textDecoration: 'none', color: 'inherit'}}>
                     <Typography textAlign="center"> тест</Typography>
                </a>          
                </MenuItem>




                <MenuItem onClick={handleCloseNavMenu}>
                <a href="#about" style={{textDecoration: 'none', color: 'inherit'}}>
                     <Typography textAlign="center"> о нас</Typography>
                </a>          
                </MenuItem>


                <MenuItem onClick={handleCloseNavMenu}>
                <a href="#faq" style={{textDecoration: 'none', color: 'inherit'}}>
                     <Typography textAlign="center"> часто задаваемые вопросы</Typography>
                </a>          
                </MenuItem>


                
                <MenuItem onClick={handleCloseNavMenu}>
                <a href="#contact" style={{textDecoration: 'none', color: 'inherit'}}>
                     <Typography textAlign="center">контакты</Typography>
                </a>          
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                <a href="#calltoaction" style={{textDecoration: 'none', color: 'inherit'}}>
                     <Typography textAlign="center">получить консультатцию</Typography>
                </a>          
                </MenuItem>





                <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/teachers/login" style={{textDecoration: 'none', color: 'inherit'}}>
                <Typography textAlign="center"> я учитель</Typography>
              </Link>
                </MenuItem>


                <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/students/login" style={{textDecoration: 'none', color: 'inherit'}}>
              <Typography textAlign="center">   я ученик</Typography>  
              </Link>
                </MenuItem>

                
        
             
            
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
                    href={'#features'}
                    style={{color: '#05f5a5'}}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#a342ff', display: 'block' }}
                  >
                    особенность
                  </Button>
                  <Button
                    href={'#testimonal'}
                    style={{color: '#05f5a5'}}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#a342ff', display: 'block' }}
                  >
                    отзывы
                  </Button>
                  <Button
                    href={'#exaple'}
                    style={{color: '#05f5a5'}}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#a342ff', display: 'block' }}
                  >
                    примеры
                  </Button>
                  <Button
                    href={'#about'}
                    style={{color: '#05f5a5'}}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#a342ff', display: 'block' }}
                  >
                    о нас
                  </Button>



                  {/* <Button
                    href={'#faq'}
                    style={{color: '#05f5a5'}}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#a342ff', display: 'block' }}
                  >
                   часто задаваемые вопросы
                  </Button>



                  <Button
                    href={'#contact'}
                    style={{color: '#05f5a5'}}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#a342ff', display: 'block' }}
                  >
                    контакты
                  </Button>

                  <Button
                    href={'#calltoaction'}
                    style={{color: '#05f5a5'}}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#a342ff', display: 'block' }}
                  >
                   получить консультатцию
                  </Button> */}

                  

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

              </Menu>
            </Box>
          ) : (
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              '@media (max-width: 884px)': {
                display: 'none'

                
              },
              '@media (min-width: 600px)': {
                flexDirection: 'row',
                gap: '2em',
              }
            }}>
              <Link to="/teachers/login">
                <Button variant="contained" color="secondary" href="/teachers/login" sx={{ width: '100%' }}>
                  я учитель
                </Button>
              </Link>
        
              <Link to="/students/login">
                <Button variant="contained" color="secondary" href="/students/login" sx={{ width: '100%' }}>
                  я ученик
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
