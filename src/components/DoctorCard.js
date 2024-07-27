import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { deepOrange } from '@mui/material/colors';
import whats from './whatsapp.jpg';
import './doctor.css';
import d1 from '../logo/d1.jpg'


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

const DoctorCard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className="glass-nav">
        <AppBar position="static" className="glass-nav">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              HelpHer
            </Typography>
            <Button color="inherit" component={RouterLink} to="/service">Services</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">SOS</Button>
            <Button color="inherit">Support</Button>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>M</Avatar>
          </Toolbar>
        </AppBar>
      </Box>

      <Box className="bg" sx={{ padding: 4 }}>
        <Box className="grid">
          <Typography variant="h4" align="center" gutterBottom>
            DOCTOR PROFILE
          </Typography>
          <Grid container spacing={2} justifyContent="center" >
            <Grid item xs={12} sm={6} md={4} className='doctors' >
              <Box className="card">
                <img
                  src={"https://media.istockphoto.com/id/1293373291/photo/portrait-of-confident-ethnic-female-doctor.jpg?s=612x612&w=0&k=20&c=CJsw6IgTecJZoBeVXqZdvh2BI-NyVa-8VcQM3fPhbYc="}
                  alt="Doctor"
                  style={{
                    marginBottom: 16,
                    height: '300px',
                    width: '300px',
                    objectFit: 'cover',
                    
                  }}
                />
                <Typography variant="h6">Dr. Shalini</Typography>
                <Typography variant="body1" color="textSecondary">
                  Gynecologist
                </Typography>
                <Box className="card-icon">
                  <img
                    src={whats}
                    alt="WhatsApp"
                    style={{
                      borderRadius: '50%',
                      height: 50,
                      width: 50,
                      objectFit: 'cover',
                      marginBottom: 8,
                    }}
                  />
                  <Typography>WhatsApp</Typography>
                </Box>
                
              </Box>

              <Box className="card">
                <img
                  src={"https://media.istockphoto.com/id/1398828096/photo/portrait-of-a-young-indian-doctor-wearing-a-stethoscope-sitting-in-a-office-writing-a.jpg?s=612x612&w=0&k=20&c=JHRk3XilS2_pzTTcuozuVTX49I7AXuI8vN_NjHJQ04w="}
                  alt="Doctor"
                  style={{
                    marginBottom: 16,
                    height: '300px',
                    width: '300px',
                    objectFit: 'cover',
                    
                  }}
                />
                <Typography variant="h6">Dr. Vimala</Typography>
                <Typography variant="body1" color="textSecondary">
                  Gynecologist
                </Typography>
                <Box className="card-icon">
                  <img
                    src={whats}
                    alt="WhatsApp"
                    style={{
                      borderRadius: '50%',
                      height: 50,
                      width: 50,
                      objectFit: 'cover',
                      marginBottom: 8,
                    }}
                  />
                  <Typography>WhatsApp</Typography>
                </Box>

              </Box>
              <Box className="card">
                <img
                  src={"https://plus.unsplash.com/premium_photo-1682089874677-3eee554feb19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZlbWFsZSUyMGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"}
                  alt="Doctor"
                  style={{
                    marginBottom: 16,
                    height: '300px',
                    width: '300px',
                    objectFit: 'cover',
                    
                  }}
                />
                <Typography variant="h6">Dr. Vimala</Typography>
                <Typography variant="body1" color="textSecondary">
                  Gynecologist
                </Typography>
                <Box className="card-icon">
                  <img
                    src={whats}
                    alt="WhatsApp"
                    style={{
                      borderRadius: '50%',
                      height: 50,
                      width: 50,
                      objectFit: 'cover',
                      marginBottom: 8,
                    }}
                  />
                  <Typography>WhatsApp</Typography>
                </Box>

              </Box>
              
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default DoctorCard;
