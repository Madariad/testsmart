import React, { useEffect, useState } from 'react';
import { Typography, Grid, Card, CardContent, CardMedia, Container } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import ScrollTrigger from 'react-scroll-trigger';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  exampleSection: {
    padding: theme.spacing(6),
    backgroundColor: '#FF4081',
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
  const [visible, setVisible] = useState(false);

  const examples = [
    {
      id: 1,
      title: 'Работа и карьера',
      description: 'Опишите, какое преимущество может дать владение английским языком при поиске работы и продвижении по карьерной лестнице. Укажите на возможности работы в международных компаниях, возможность путешествий и общения с коллегами из разных стран.',
      image: '../../public/images/0315_IHR_Blog-Header-3-1.png',
    },
    {
      id: 2,
      title: 'Путешествия',
      description: 'Расскажите о том, как знание английского языка может облегчить путешествия по англоязычным странам. Укажите на возможность общения с местными жителями, понимания указателей и информации на туристических объектах, заказа еды в ресторанах и многое другое.',
      image: '../../public/images/0315_IHR_Blog-Header-3-1.png',
    },
    {
      id: 3,
      title: 'Образование',
      description: 'Подчеркните важность английского языка при получении высшего образования за рубежом, участии в международных программах обмена студентами или просмотре лекций и материалов на английском языке.',
      image: '../../public/images/0315_IHR_Blog-Header-3-1.png',
    },
    {
      id: 4,
      title: 'Культура и развлечения',
      description: 'Укажите на доступность источников развлечения на английском языке, таких как фильмы, музыка, книги и игры. Подчеркните возможность погружения в англоязычную культуру через изучение языка.',
      image: '../../public/images/0315_IHR_Blog-Header-3-1.png',
    },
    {
      id: 5,
      title: 'Межкультурное понимание',
      description: 'Объясните, как изучение английского языка помогает улучшить межкультурное понимание и коммуникацию. Укажите на значимость умения общаться с людьми из разных культур и понимать их традиции, обычаи и ценности.',
      image: '../../public/images/0315_IHR_Blog-Header-3-1.png',
    },
    {
      id: 6,
      title: 'Межкультурное понимание',
      description: 'Объясните, как изучение английского языка помогает улучшить межкультурное понимание и коммуникацию. Укажите на значимость умения общаться с людьми из разных культур и понимать их традиции, обычаи и ценности.',
      image: '../../public/images/0315_IHR_Blog-Header-3-1.png',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const triggerTop = windowHeight * 0.9; // Начинать анимацию, когда элемент находится на 90% видимости

      if (scrollTop > triggerTop) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={classes.exampleSection} id='exaple'>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Применение в реальных ситуациях
        </Typography>
        <Grid container spacing={4}>
          {examples.map((example) => (
            <Grid item xs={12} sm={6} md={4} key={example.id}>
              <ScrollTrigger onEnter={() => setVisible(true)}>
                <Fade when={visible}>
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
                </Fade>
              </ScrollTrigger>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default ExampleSection;
