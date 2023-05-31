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

const data = [
    { name: 'Учиник 1', role: 'Учитель', avatar: '../../public/images/beautiful-latin-woman-avatar.jpg' },
    { name: 'Учиник 1', role: 'Ученик', avatar: '../../public/images/beautiful-latin-woman-avatar.jpg' },
    { name: 'Учиник 2', role: 'Учитель', avatar: '../../public/images/beautiful-latin-woman-avatar.jpg' },
    { name: 'Учиник 2', role: 'Ученик', avatar: '../../public/images/beautiful-latin-woman-avatar.jpg' },

  ];

const StudentsSection = () => (
    <Box sx={{ padding: '40px' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '30px' }}>
        Ученики
      </Typography>
      <Grid container spacing={4}>
        {data
          .filter((item) => item.role === 'Ученик')
          .map((item) => (
            <Grid item xs={6} sm={4} md={3} key={item.name}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <Avatar
                  alt={item.name}
                  src={item.avatar}
                  sx={{ width: '100px', height: '100px', marginBottom: '10px' }}
                />
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center' }}>
                  {item.role}
                </Typography>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
  export default StudentsSection