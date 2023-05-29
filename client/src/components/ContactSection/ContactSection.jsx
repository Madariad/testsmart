import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box, IconButton } from '@material-ui/core';
import { Phone, Mail, LocationOn } from '@material-ui/icons';
import Container from '@mui/material/Container'

const useStyles = makeStyles((theme) => ({
section: {
padding: theme.spacing(8, 0),
background: theme.palette.background.default,
},
title: {
marginBottom: theme.spacing(4),
fontWeight: 'bold',
textAlign: 'center',
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
<Typography variant="h2" className={classes.title}>
Контактная информация
</Typography>
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