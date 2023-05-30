import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Box, Container } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
section: {
padding: theme.spacing(8, 0),
background: theme.palette.secondary.main,
color: theme.palette.common.white,
textAlign: 'center',
},
title: {
marginBottom: theme.spacing(4),
fontWeight: 'bold',
},
description: {
marginBottom: theme.spacing(6),
},
button: {
fontWeight: 'bold',
borderRadius: theme.spacing(4),
padding: theme.spacing(2, 6),
textTransform: 'none',
},
icon: {
marginLeft: theme.spacing(1),
},
}));

const CallToActionSection = () => {
const classes = useStyles();

return (
<section className={classes.section}>
<Container maxWidth="lg">
<Typography variant="h2" className={classes.title}>
Присоединяйтесь к нам сегодня и начните свой путь к успешному овладению английским языком!
</Typography>
<Typography variant="body1" className={classes.description}>
🌟 Получите индивидуальную консультацию от наших экспертов. <br />
📚 Изучайте язык в удобное для вас время и темпе. <br />
💻 Пользуйтесь возможностью онлайн-занятий или посещайте наши офлайн-классы.<br />
💡 Опытные преподаватели помогут вам развить разговорные навыки и достичь своих целей.<br />

Не упустите шанс улучшить свои знания и расширить возможности!<br />

Получите бесплатную консультацию прямо сейчас!<br />
</Typography>
<Box>
<Button
variant="contained"
color="primary"
className={classes.button}
endIcon={<ArrowForward className={classes.icon} />}
>
Получить консультацию
</Button>
</Box>
</Container>
</section>
);
};

export default CallToActionSection;