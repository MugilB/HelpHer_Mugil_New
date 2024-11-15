import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';
import axios from 'axios';
import google from './google.png';
import aadhar from './aadhar.png';
import { Link as RouterLink } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';

const defaultTheme = createTheme();

const CustomTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    backgroundColor: 'transparent',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'rgba(255, 255, 255, 0.5)',
  },
  '& .MuiInput-underline:hover:before': {
    borderBottomColor: 'rgba(255, 255, 255, 0.75)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'rgba(255, 255, 255, 0.75)',
  },
});

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Help Her
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    const payload = {
      email: username,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:8080/login/check', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success) {
        if (rememberMe) {
          localStorage.setItem('username', username);
        } else {
          sessionStorage.setItem('username', username);
        }

        if (response.data.role === 'admin') {
          navigate('/dashboard');
        } else {
          navigate('/services');
        }
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
      alert('Login failed. Please try again.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      console.log('Google login successful', credentialResponse);
      navigate('/services');
    },
    onError: () => {
      alert('Google login failed. Please try again.');
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url("https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            boxShadow: 'none',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Log In to Your Account
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <CustomTextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
              />
              <CustomTextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link variant="body2">Forgot password?</Link>
                </Grid>
                <Grid item>
                  <Link component={RouterLink} to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <div style={{ textAlign: 'center', fontSize: '20px' }}>or</div>
              <Box
                sx={{
                  my: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    borderRadius: '30px',
                    borderColor: 'black',
                    color: 'black',
                  }}
                  onClick={() => googleLogin()}
                >
                  <img
                    src={google}
                    alt="Google Logo"
                    style={{ marginRight: '10px' }}
                    width="20"
                    height="20"
                  />
                  Continue with Google
                </Button>

                {/* <Button
                  variant="outlined"
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    borderRadius: '30px',
                    borderColor: 'black',
                    color: 'black',
                  }}
                  onClick={() => {
                    
                  }}
                >
                  <img
                    src={aadhar}
                    alt="Aadhar Logo"
                    style={{ marginRight: '10px' }}
                    width="20"
                    height="20"
                  />
                  Continue with Aadhar
                </Button> */}
              </Box>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
