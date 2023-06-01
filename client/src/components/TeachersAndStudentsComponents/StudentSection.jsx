import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import  axiosConfig  from "../axiosConfig";

const StudentsSection = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosConfig.get('/api/v1/students');
        const data = await response.data;
        setStudents(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
console.log(students);
  return (
    <Box sx={{ padding: '40px' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '30px' }}>
        Ученики
      </Typography>
      <Grid container spacing={4}>
        {students.map((student) => (
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
                src="../../../public/images/students.png"
                sx={{ width: '100px', height: '100px', marginBottom: '10px' }}
              />
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                {`${student.first_name} ${student.last_name}`}
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                Ученик
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StudentsSection;
