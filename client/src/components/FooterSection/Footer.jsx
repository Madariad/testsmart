import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box, Link, IconButton } from '@material-ui/core';
import { Facebook, Twitter, Instagram, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
  },
  link: {
    margin: theme.spacing(1),
    color: theme.palette.common.white,
  },
  iconButton: {
    color: theme.palette.common.white,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h4" className={classes.title}>
        Мы в социальных сетях
      </Typography>
      <Grid container justifyContent="center">
        <IconButton
          component={Link}
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener"
          className={classes.iconButton}
        >
          <Facebook />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener"
          className={classes.iconButton}
        >
          <Twitter />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener"
          className={classes.iconButton}
        >
          <Instagram />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener"
          className={classes.iconButton}
        >
          <LinkedIn />
        </IconButton>
      </Grid>
      <Typography variant="body2">
        &copy; 2023 Организация SMART. Все права защищены.
      </Typography>
    </footer>
  );
};

export default Footer;