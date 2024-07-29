import React from 'react';
import { Box, Grid, AppBar, Avatar, Button, Toolbar, Typography, createTheme, ThemeProvider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { deepOrange } from '@mui/material/colors';
import {ReactTyped} from 'react-typed';
import whats from './whatsapp.jpg';
import './doctor.css';

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
      <Box className="bg">
      <Box className="glass-nav">
          <AppBar position="static" className="glass-nav">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                HelpHer
              </Typography>
              <Button color="inherit" component={RouterLink} to="/service">Services</Button>
              <Button color="inherit" component={RouterLink} to="/about">About</Button>
              <Button color="inherit" component={RouterLink} to="/sos">SOS</Button>              
              <Avatar sx={{ bgcolor: deepOrange[500] }} component={RouterLink} to="/">M</Avatar>
            </Toolbar>
          </AppBar>
        </Box>

        <Box className="content" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <Typography
            sx={{ fontSize: '80px', textAlign: 'center', marginBottom: '20px' }}
            component="span"
          >
            <ReactTyped
              strings={['Our Experts']}
              typeSpeed={100}
              backSpeed={50}
              loop={false}
            />
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {[
              {
                name: 'Dr. Shalini',
                specialty: 'Gynecologist',
                img: "https://media.istockphoto.com/id/1293373291/photo/portrait-of-confident-ethnic-female-doctor.jpg?s=612x612&w=0&k=20&c=CJsw6IgTecJZoBeVXqZdvh2BI-NyVa-8VcQM3fPhbYc=",
                whatsapp: "https://wa.me/+919894552798",
              },
              {
                name: 'Dr. Vimala',
                specialty: 'Gynecologist',
                img: "https://media.istockphoto.com/id/1398828096/photo/portrait-of-a-young-indian-doctor-wearing-a-stethoscope-sitting-in-a-office-writing-a.jpg?s=612x612&w=0&k=20&c=JHRk3XilS2_pzTTcuozuVTX49I7AXuI8vN_NjHJQ04w=",
                whatsapp: "https://wa.me/+919159954311",
              },
              {
                name: 'Dr. Bhagya',
                specialty: 'Gynecologist',
                img: "https://plus.unsplash.com/premium_photo-1682089874677-3eee554feb19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZlbWFsZSUyMGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
                whatsapp: "https://wa.me/+919843873343",
              },
            ].map((doctor, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} className="doctors">
                <Box className="card">
                  <img
                    src={doctor.img}
                    alt="Doctor"
                    style={{
                      marginBottom: 16,
                      height: '300px',
                      width: '300px',
                      objectFit: 'cover',
                    }}
                  />
                  <Typography variant="h6">{doctor.name}</Typography>
                  <Typography variant="h6" color="textSecondary">
                    {doctor.specialty}
                  </Typography>
                  <a href={doctor.whatsapp} style={{ textDecoration: 'none', color: 'black' }}>
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
                  </a>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default DoctorCard;
