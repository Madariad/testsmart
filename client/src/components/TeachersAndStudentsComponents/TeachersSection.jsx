import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import axiosConfig from "../axiosConfig";



const TeachersSection = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosConfig.get('/api/v1/teachers');
        const data = await response.data;
        setTeachers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ padding: '40px' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '30px' }}>
      Учители
      </Typography>
      <Grid container spacing={4}>
        {teachers.map((student) => (
          <Grid item xs={6} sm={4} md={3} key={student.id}>
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
                alt={`${student.first_name} ${student.last_name}`}
                src="../../../public/images/teachers.jpg"
                sx={{ width: '100px', height: '100px', marginBottom: '10px' }}
              />
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                {`${student.first_name} ${student.last_name}`}
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                Учител
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )};
export default TeachersSection