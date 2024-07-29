// SignInSide.js
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';
import logo from './1.png';
import google from './google.png';
import facebook from './facebook.png';
import twitter from './twitter.jpg';
import { Link as RouterLink } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

export default function SignInSide() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    const hardcodedUsername = '22csecs.mugil.b@skct.edu.in';
    const hardcodedPassword = 'Mugpas@23';

    const hardcodedUsername1 = 'admin@gmail.com';
    const hardcodedPassword1 = 'admin@123';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      if (rememberMe) {
        localStorage.setItem('username', username);
      }
      navigate('/main');
    } 

    else if (username === hardcodedUsername1 && password === hardcodedPassword1) {
      if (rememberMe) {
        localStorage.setItem('username', username);
      }
      navigate('/dashboard');
    } 
    
    else {
      alert('Invalid username or password');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
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
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
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
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(100px)',
            boxShadow: '1000000px 4px 6px rgba(0, 0, 0, 0.1)',            
            border: '1px solid rgba(255, 255, 255, 0.18)',
          }}
        >
          <Box
            sx={{
              my: 2,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
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
              Sign in
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                onChange={(e) => setRememberMe(e.target.checked)}
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
                <Link  variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                <Link component={RouterLink} to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
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
                <Typography>continue with</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                  <img
                    src={google}
                    alt="Google Logo"
                    style={{ margin: '0 10px',borderRadius:'50px' }}
                    width="50"
                    height="50"
                  />
                  <img
                    src={facebook}
                    alt="Facebook Logo"
                    style={{ margin: '0 10px',borderRadius:'50px' }}
                    width="50"
                    height="50"
                  />
                  <img
                    src={twitter}
                    alt="Twitter Logo"
                    style={{ margin: '0 10px',borderRadius:'50px' }}
                    width="50"
                    height="50"
                  />
                </Box>
              </Box>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}