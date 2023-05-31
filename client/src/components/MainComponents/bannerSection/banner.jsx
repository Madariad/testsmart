import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Container } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  banner: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    top: '-70px',
    
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    zIndex: -1,
    backgroundSize: "contain"
  },


}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <img
        src="../../images/banner3.png"
        alt="Banner Image"
        className={classes.image}
      />
    
    </div>
  );
}

export default Banner;
