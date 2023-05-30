import React from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  exampleSection: {
    padding: theme.spacing(6),
    backgroundColor: '#9ffffe',
    borderRadius: '50px',
    color: theme.palette.common.white,
    marginBottom: '10%',
    marginTop: '10%',
  },
  exampleCard: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    height: '100%',
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[5],
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
      boxShadow: theme.shadows[10],
    },
  },
  exampleImage: {
    height: 200,
    objectFit: 'cover',
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(2) + 'px ' + theme.spacing(2) + 'px 0 0',
  },
  exampleTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
}));

const ExampleSection = () => {
  const classes = useStyles();

  const examples = [
    {
      id: 1,
      title: 'Повышение продуктивности команды',
      description: 'Узнайте, как наша платформа помогла команде Smart улучшить совместную работу, увеличить эффективность процессов и достичь поставленных целей.',
      image: '../../public/images/88.png',
    },
    {
      id: 2,
      title: 'Улучшение клиентского опыта',
      description: 'Узнайте, как наша услуга Smart помогла компании улучшить взаимодействие с клиентами, повысить уровень обслуживания и удовлетворенность клиентов.',
      image: '../../public/images/88.png',
    },
    {
      id: 3,
      title: 'Сокращение затрат и повышение эффективности',
      description: 'Узнайте, как наш продукт Smart помог организации снизить операционные затраты, оптимизировать рабочие процессы и достичь большей производительности.',
      image: '../../public/images/88.png',
    },
  ];

  return (
    <section className={classes.exampleSection}>
      <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Применение в реальных ситуациях
      </Typography>
      <Grid container spacing={3}>
        {examples.map((example) => (
          <Grid item xs={12} sm={6} md={4} key={example.id}>
            <Card className={classes.exampleCard}>
              <CardMedia
                className={classes.exampleImage}
                component="img"
                image={example.image}
                alt={example.title}
              />
              <CardContent>
                <Typography variant="h6" className={classes.exampleTitle}>
                  {example.title}
                </Typography>
                <Typography variant="body2">{example.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Container>
    </section>
  );
};

export default ExampleSection;
