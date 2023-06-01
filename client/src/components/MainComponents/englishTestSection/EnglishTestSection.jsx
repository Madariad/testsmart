import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: '#f7f7f7',
    padding: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    position: 'relative',
  },
  title: {
    fontSize: '3rem',
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
    color: '#333333',
  },
  description: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(4),
    color: '#666666',
  },
  button: {
    backgroundColor: '#ff4081',
    color: '#ffffff',
    padding: theme.spacing(1, 4),
    fontSize: '1.5rem',
    '&:hover': {
      backgroundColor: '#d81b60',
    },
  },
  quote: {
    fontStyle: 'italic',
    fontSize: '1.5rem',
    marginBottom: theme.spacing(4),
    color: '#666666',
  },
  additionalElement: {
    marginTop: theme.spacing(4),
    fontSize: '1rem',
    fontWeight: 'bold',
    position: 'relative',
    color: '#999999',
  },

}));

const CallToActionSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Typography variant="h2" component="h2" className={classes.title}>
        Добро пожаловать на наш тест!
      </Typography>
      <Typography variant="body1" className={classes.description}>
        Пройдите наш захватывающий тест и проверьте свои знания.
      </Typography>
      <Typography variant="body2" className={classes.quote}>
        "Образование - это самое мощное оружие, которое вы можете использовать для изменения мира." - Нельсон Мандела
      </Typography>
      <Link to={'/test'}>
        <Button variant="contained" className={classes.button}>
          Начать тест
        </Button>
      </Link>
      <Box className={classes.additionalElement}>
        <Typography variant="body2" gutterBottom>
         title
        </Typography>
      </Box>
    </section>
  );
};

export default CallToActionSection;
