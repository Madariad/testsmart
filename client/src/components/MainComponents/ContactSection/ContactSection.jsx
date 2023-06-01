import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box, IconButton } from '@material-ui/core';
import { Phone, Mail, LocationOn } from '@material-ui/icons';
import Container from '@mui/material/Container';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(8, 0),
    background: theme.palette.background.default,
  },
  title: {
    marginBottom: theme.spacing(4),
    fontWeight: 'bold',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
  text: {
    fontWeight: 'bold',
  },
}));

const ContactSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <div style={{ overflow: 'hidden' }}>
          <Grid container justifyContent="center" style={{ width: '100%' }}>
            <Grid item lg={12} md={12} sm={10} xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h2" className={classes.title} color="initial" align="center">
                  Присоединяйтесь к нам сегодня и начните свой путь к успешному овладению английским языком!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4} md={4}>
            <Box className={classes.contactItem}>
              <Phone className={classes.icon} />
              <Typography variant="body1" className={classes.text}>
                +7 775 733 1645
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Box className={classes.contactItem}>
              <Mail className={classes.icon} />
              <Typography variant="body1" className={classes.text}>
                info@smartenglish.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Box className={classes.contactItem}>
              <LocationOn className={classes.icon} />
              <Typography variant="body1" className={classes.text}>
                толебаева 72, бц туран
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactSection;
