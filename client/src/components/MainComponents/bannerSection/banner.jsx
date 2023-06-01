import React from 'react';
import { makeStyles } from '@mui/styles';


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
    backgroundSize: "contain",
  },
  '@media (max-width: 1449px)': {
    image: {
      content: `url("../../images/banner3resaizepng.png")`,
    },
  },
  '@media (min-width: 1449px) and (min-height: 821px)': {
    image: {
      content: `url("../../images/banner3.png")`
    }
  }
  
  
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <div className={classes.image}></div>
    </div>
  );
}

export default Banner;
