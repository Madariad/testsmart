import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Container } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  banner: {
    position: 'relative',
    width: '100%',
    height: '80vh',
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  content: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color: theme.palette.common.white,
    textAlign: 'center',
    padding: theme.spacing(2),
    backdropFilter: 'brightness(0.5)', 
    backdropBlur: '10px', 
  },
  title: {
    fontSize: '3.5rem', 
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
    textShadow: `2px 2px 4px rgba(0, 0, 0, 0.5)`, 
  },
  subtitle: {
    fontSize: '1.75rem', 
    textShadow: `1px 1px 2px rgba(0, 0, 0, 0.5)`, 
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <img
        src="../../images/banner2.png"
        alt="Banner Image"
        className={classes.image}
      />
      <div className={classes.content}>
        <Container maxWidth="xl">
          <Typography variant="h1" component="h2" className={classes.title}>
            SMART
          </Typography>
          <Typography variant="h2" component="h3" className={classes.subtitle}>
            SUBTITLE
          </Typography>
        </Container>
      </div>
    </div>
  );
}

export default Banner;
