import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from './1.png';  // Replace with your logo path
import google from './google.png';  // Replace with your social login icon paths
import facebook from './facebook.png';
import twitter from './twitter.jpg';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';  // Import axios for HTTP requests

const defaultTheme = createTheme();

export default function SignUpSide() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();  // Initialize the useNavigate hook

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      // Replace with your backend API endpoint
      const response = await axios.post('http://localhost:8080/login', {
        username,
        email,
        phonenumber: phone,
        password,
        role: 'user'  // or any default role you want to set
      });
      console.log('Response:', response.data);
      // Redirect to the sign-in page after a successful sign-up
      navigate('/');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{
            backgroundImage: 'url("https://img.freepik.com/premium-photo/woman-polo-shirt-stands-front-pink-background_911060-39512.jpg?w=826")',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(10px)',
            boxShadow: '200000 4px 6px rgba(0, 0, 0, 0.1)',            
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'fixed',
            border: '1px solid rgba(255, 255, 255, 0.18)',
          }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(100px)',
            boxShadow: '1000000px 4px 6px rgba(0, 0, 0, 0.1)',            
            border: '1px solid rgba(255, 255, 255, 0.18)',
          }}
        >
          <Box sx={{
              my: 2,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                borderRadius: '50%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              width="200"
              height="200"
            />
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="tel"
                onChange={(e) => setPhone(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                <Link component={RouterLink} to="/" variant="body2">
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
              <Box sx={{
                  my: 1,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Typography>Continue with</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                  <img
                    src={google}
                    alt="Google Logo"
                    style={{ margin: '0 10px', borderRadius: '50px' }}
                    width="50"
                    height="50"
                  />
                  <img
                    src={facebook}
                    alt="Facebook Logo"
                    style={{ margin: '0 10px', borderRadius: '50px' }}
                    width="50"
                    height="50"
                  />
                  <img
                    src={twitter}
                    alt="Twitter Logo"
                    style={{ margin: '0 10px', borderRadius: '50px' }}
                    width="50"
                    height="50"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
