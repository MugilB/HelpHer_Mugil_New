import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import { Link as RouterLink } from 'react-router-dom'; 
import {ReactTyped} from 'react-typed';
import './styles.css'; 

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className="background-container">
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

        <Box className="intro">
          <div style={{marginTop:'10vh'}}>
            <Typography style={{ fontSize: '80px' }} component="span">
              <ReactTyped
                strings={['Help Her']}
                typeSpeed={250}
                backSpeed={50}
                loop={false}
              />
            </Typography>
          </div>
          <Typography style={{ fontSize: '40px', marginBottom: '24px' }}>
            Empower Woman Safety and Society
          </Typography>
          <Button component={RouterLink} to="/service" variant="contained" endIcon={<SendIcon />} size="large">
            Ask Help
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
