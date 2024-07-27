import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import bikeImage from '../logo/bike ride.png';
import delievery from '../logo/delievery.png';
import rooms from '../logo/rooms.png';
import blood from '../logo/menstruals.png';
import baby from '../logo/pregnancy.png';
import cyber from '../logo/help.png';
import gym from '../logo/fitness.png';
import talk from '../logo/talk.png';
import './service.css';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { deepOrange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

const Services = () => {
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

      <Box className="background">

        <Box className="grid-container">
            <Typography variant="h4" align="center" gutterBottom>SERVICES</Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Box className="glass-card" component={RouterLink} to="/bike">
                <img src={bikeImage}  height="50px" width="50px" />
                Bike Ride
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="glass-card">
                <img src={delievery} style={{borderRadius: '50%'}} height="50px" width="50px" />
                Food Delivery
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="glass-card">
                <img src={rooms} style={{borderRadius: '50%'}} height="50px" width="50px" />
                Rooms
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="glass-card" component={RouterLink} to="/blood">
                <img src={blood} style={{borderRadius: '50%'}} height="50px" width="50px" />
                Menstruals
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="glass-card" component={RouterLink} to="/preg">
                <img src={baby}  height="50px" width="50px" component={RouterLink} to="/preg"/>
                Pregnancy
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="glass-card">
                <img src={cyber} style={{borderRadius: '50%'}} height="50px" width="50px" />
                Cyber Crime
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="glass-card">
                <img src={talk}  height="50px" width="50px" />
                Mental Counselling
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="glass-card">
                <img src={gym}  height="50px" width="50px" />
                Fitness
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Services;
