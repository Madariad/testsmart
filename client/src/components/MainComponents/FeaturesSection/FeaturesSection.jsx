import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Phone as PhoneIcon, Language as LanguageIcon, People as PeopleIcon, School as SchoolIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  const features = [
    {
      title: 'Гибкие возможности обучения',
      description:
        'Мы предлагаем как очные, так и онлайн-занятия, что позволяет вам выбрать формат обучения, соответствующий вашему расписанию и предпочтениям.',
      icon: <LanguageIcon />,
      color: '#FFD700',
    },
    {
      title: 'Индивидуальная учебная программа',
      description:
        'Мы предлагаем индивидуальный учебный план с учетом ваших индивидуальных потребностей в обучении и целей.',
      icon: <SchoolIcon />,
      color: '#FFA07A',
    },
    {
      title: 'Опытные инструкторы',
      description:
        'Наши преподаватели имеют большой опыт и знания в области преподавания английского как второго языка.',
      icon: <PeopleIcon />,
      color: '#87CEEB',
    },
    {
      title: 'Интерактивные учебные материалы',
      description:
        'Наши учебные материалы интерактивны и увлекательны, что делает процесс обучения приятным и эффективным.',
      icon: <PhoneIcon />,
      color: '#98FB98',
    },
  ];

  return (
    <Box sx={{ position: 'relative',
    width: '100%',
    color: 'transparent',
    backgroundColor: '#d6fff1',
    top: '-70px'}}> 

<Container maxWidth="lg" sx={{ py: 8 }} >


<Typography variant="h4" component="h2" align="center" sx={{ mb: 4, color: '#333' }}>
  Ключевые особенности
</Typography>
<Grid container spacing={4} justifyContent="center">
  {features.map((feature, index) => (
    <Grid item xs={12} md={6} key={index}>
      <motion.div variants={featureVariants} initial="hidden" animate="visible">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '2rem',
              borderRadius: '0.5rem',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              backgroundColor: feature.color,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ fontSize: '4rem', marginBottom: '1.5rem', color: '#FFF' }}>{feature.icon}</div>
            <Typography variant="h6" component="h3" align="center" sx={{ fontWeight: 'bold', mb: 2, color: '#FFF' }}>
              {feature.title}
            </Typography>
            <Typography variant="body2" align="center" sx={{ color: '#FFF' }}>
              {feature.description}
            </Typography>
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '20%',
                backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
                zIndex: -1,
              }}
            ></div>
          </div>
        </motion.div>
      </motion.div>
    </Grid>
  ))}
</Grid>


</Container>

    </Box>
  
  );
};

export default FeaturesSection;
