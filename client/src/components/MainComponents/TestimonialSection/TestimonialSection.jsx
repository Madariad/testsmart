import React from 'react';
import { Typography, Grid, Card, CardContent, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FormatQuote as QuoteIcon } from '@material-ui/icons';
import Container from '@mui/material/Container'

const useStyles = makeStyles((theme) => ({
  testimonialSection: {
    padding: theme.spacing(6),
    backgroundColor: theme.palette.background.default,
  },
  testimonialCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[5],
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
      boxShadow: theme.shadows[10],
    },
  },
  testimonialIcon: {
    fontSize: 60,
    marginBottom: theme.spacing(2),
  },
  testimonialContent: {
    padding: theme.spacing(4),
  },
  testimonialAvatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginBottom: theme.spacing(2),
  },
  testimonialName: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  testimonialMessage: {
    fontStyle: 'italic',
  },
}));

const TestimonialSection = () => {
  const classes = useStyles();

  const testimonials = [
    {
      id: 1,
      name: 'Анна Иванова',
      message: 'Я очень довольна вашим продуктом! Он полностью решил мою проблему и значительно улучшил мою жизнь. Большое спасибо команде!',
    },
    {
      id: 2,
      name: 'Иван Петров',
      message: 'Я использовал вашу услугу и остался очень доволен результатом. Качество работы на высшем уровне, а команда профессионалов - самая лучшая!',
    },
    {
      id: 3,
      name: 'Елена Смирнова',
      message: 'С вашим продуктом я смогла сэкономить время и деньги. Это действительно эффективный и полезный инструмент для любого бизнеса.',
    },
    {
      id: 4,
      name: 'Мадара Учиха',
      message: 'С вашим продуктом я смогла сэкономить время и деньги. Это действительно эффективный и полезный инструмент для любого бизнеса.',
    },
  ];

  return (
    <section className={classes.testimonialSection}>
     <Container maxWidth="lg">
     <Typography variant="h4" align="center" gutterBottom>
        Отзывы клиентов
      </Typography>
      <Grid container spacing={3}>
        {testimonials.map((testimonial) => (
          <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
            <Card className={classes.testimonialCard}>
              <QuoteIcon className={classes.testimonialIcon} />
              <CardContent className={classes.testimonialContent}>
                <Avatar className={classes.testimonialAvatar} src={testimonial.avatar} alt={testimonial.name} />
                <Typography variant="h6" className={classes.testimonialName}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" className={classes.testimonialMessage}>
                  {testimonial.message}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
     </Container>
    </section>
  );
};

export default TestimonialSection;
