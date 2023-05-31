import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import TeachersSection from './TeachersSection'
import StudentsSection from './StudentSection'


const ListSection = () => {
  
  const [currentSection, setCurrentSection] = useState('teachers');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNavButtonClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <Box>
      <AppBar position="static" sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <Button
            color="inherit"
            onClick={() => handleNavButtonClick('teachers')}
            sx={{ mr: isMobile ? 0 : 2 }}
          >
            Учителя
          </Button>
          <Button color="inherit" onClick={() => handleNavButtonClick('students')}>
            Ученики
          </Button>
        </Toolbar>
      </AppBar>
      {currentSection === 'teachers' ? <TeachersSection /> : <StudentsSection />}
    </Box>
  );
};

export default ListSection;