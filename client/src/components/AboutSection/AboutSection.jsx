import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box, Avatar, Container } from '@material-ui/core';
import { People, Timeline } from '@material-ui/icons';
import Cards from "./cards/cards";
import images from "../../../public/images/Avatar-Maker-768x835.png";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(8, 0),
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  title: {
    marginBottom: theme.spacing(4),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    marginBottom: theme.spacing(6),
    textAlign: 'center',
  },
  icon: {
    marginBottom: theme.spacing(2),
    fontSize: 40,
    color: theme.palette.secondary.main,
  },
  avatar: {
    width: 80,
    height: 80,
    marginBottom: theme.spacing(2),
  },
  name: {
    fontWeight: 'bold',
  },
  role: {
    color: theme.palette.grey[500],
  },
}));

const AboutSection = () => {
  const classes = useStyles();

  return (
      <section className={classes.section}>
    <Container maxWidth="lg">
      <Typography variant="h2" className={classes.title}>
        О нас
      </Typography>
      <Typography variant="body1" className={classes.description}>
           Организация SMART предлагает обучение английскому языку для взрослых и детей. Мы сосредоточены на разговорной практике, чтобы помочь нашим студентам свободно общаться на английском языке. Мы предлагаем как дневные, так и вечерние занятия, чтобы соответствовать разным графикам. Кроме того, мы предлагаем как онлайн, так и офлайн форматы занятий, чтобы наши студенты могли выбрать наиболее удобный способ обучения. Наша команда состоит из опытных и квалифицированных преподавателей, которые помогут вам достичь ваших языковых целей.
           Вы можете полностью положиться на наш опыт и экспертизу, которые делают нашу компанию надежной и доверительной. Мы стремимся предоставить качественное образование и помочь нашим студентам достичь успеха в изучении английского языка.
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Box textAlign="center">
          <Cards title='John Doe' subtitle='Генеральный директор' image={images}/>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box textAlign="center">
           <Cards title='Jane Smith' subtitle='Главный дизайнер' image={images}/>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box textAlign="center">
           <Cards title='Mark Johnson' subtitle='Технический директор' image={images}/>
          </Box>
        </Grid>
      </Grid>
   </Container>
    </section>
  );
};

export default AboutSection;
