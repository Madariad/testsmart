import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(8, 0),
    background: theme.palette.background.default,
  },
  title: {
    marginBottom: theme.spacing(4),
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '2.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
  accordion: {
    marginBottom: theme.spacing(2),
    boxShadow: 'none',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  accordionSummary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    '& .Mui-expanded': {
      backgroundColor: theme.palette.secondary.main,
    },
    '& .MuiAccordionSummary-content': {
      fontWeight: 'bold',
    },
  },
  accordionDetails: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2),
  },
}));

const FAQSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.section} id='faq'>
      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h2" className={classes.title} color="initial">
                Часто задаваемые вопросы
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMore />} className={classes.accordionSummary}>
            <Typography>Какие возрастные группы вы обучаете?</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Typography variant="body1">
              Мы обучаем как взрослых, так и детей. Наша программа адаптирована для разных возрастных групп и предлагает
              специальные материалы и подходы для каждой из них.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMore />} className={classes.accordionSummary}>
            <Typography>Какой у вас подход к обучению разговорному английскому?</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Typography variant="body1">
              Мы сосредоточены на развитии навыков разговорной практики. В наших занятиях большое внимание уделяется
              разговорным упражнениям, ролевым играм и обсуждению реальных ситуаций, чтобы помочь студентам стать более
              уверенными в использовании английского языка в повседневной жизни.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMore />} className={classes.accordionSummary}>
            <Typography>Какие форматы занятий вы предлагаете?</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Typography variant="body1">
              Мы предлагаем как онлайн, так и офлайн форматы занятий. Вы можете выбрать удобный способ обучения в зависимости
              от своих предпочтений и возможностей.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMore />} className={classes.accordionSummary}>
            <Typography>Как можно связаться с нами для получения дополнительной информации?</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Typography variant="body1">
              Вы можете связаться с нами по телефону +7 123 456 789 или отправить нам электронное письмо на
              info@smartenglish.com. Мы с удовольствием ответим на все ваши вопросы и предоставим необходимую информацию.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQSection;
