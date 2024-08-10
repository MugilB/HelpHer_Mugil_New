import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { Box, Grid, AppBar, Avatar, Button, Toolbar, Typography, createTheme, ThemeProvider, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { deepOrange } from '@mui/material/colors';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import './doctor.css';
import './styles.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

const Navbar = styled.nav`
  background-color: #ff66a3;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled(ScrollLink)`
  color: white;
  padding: 15px 20px;
  text-decoration: none;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s;
    position: absolute;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavBrand = styled.div`
  padding: 15px 20px;
  font-size: 1.5em;
`;

const doctors = [
  {
    name: 'Dr. Shalini',
    specialty: 'Gynecologist',
    img: "https://media.istockphoto.com/id/1293373291/photo/portrait-of-confident-ethnic-female-doctor.jpg?s=612x612&w=0&k=20&c=CJsw6IgTecJZoBeVXqZdvh2BI-NyVa-8VcQM3fPhbYc=",
    whatsapp: "https://wa.me/+919894552798",
    meet: "https://meet.google.com/abc-defg-hij"
  },
  {
    name: 'Dr. Vimala',
    specialty: 'Gynecologist',
    img: "https://media.istockphoto.com/id/1398828096/photo/portrait-of-a-young-indian-doctor-wearing-a-stethoscope-sitting-in-a-office-writing-a.jpg?s=612x612&w=0&k=20&c=JHRk3XilS2_pzTTcuozuVTX49I7AXuI8vN_NjHJQ04w=",
    whatsapp: "https://wa.me/+919159954311",
    meet: "https://meet.google.com/klm-nopq-rst"
  },
  {
    name: 'Dr. Bhagya',
    specialty: 'Gynecologist',
    img: "https://plus.unsplash.com/premium_photo-1682089874677-3eee554feb19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZlbWFsZSUyMGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
    whatsapp: "https://wa.me/+919843873343",
    meet: "https://meet.google.com/uvw-xyz-a12"
  },
];

const DoctorCard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar>
          <NavBrand>HelpHer</NavBrand>
          <NavItems>
            <NavItem to="home" smooth={true} duration={500}>Home</NavItem>
            <NavItem to="services" smooth={true} duration={500} offset={-80}>Services</NavItem>
            <NavItem to="about" smooth={true} duration={500} offset={-80}>About</NavItem>
            <NavItem to="contact" smooth={true} duration={500} offset={-80}>Contact</NavItem>
          </NavItems>
        </Navbar>

        <Box className="content" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', mt: '64px' }}>
          {/* Added margin-top to create space between the navbar and the content */}

          <Box sx={{ border: '2px solid #ff66a3', borderRadius: 2, p: 2, width: '90%', maxWidth: '1200px' }}>
          <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif'}}>
          Our <span style={{ color: '#ff66a3' }}>Specialists</span>
          </h1>

            <Grid container spacing={2} justifyContent="center">
              {doctors.map((doctor, index) => (
                <Grid item xs={8} sm={3} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={doctor.img}
                      alt={doctor.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {doctor.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {doctor.specialty}
                      </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                      <IconButton aria-label="whatsapp" component="a" href={doctor.whatsapp} sx={{ color: 'green' }}>
                        <WhatsAppIcon fontSize="large" />
                        <Typography sx={{ ml: 1 }}>WhatsApp</Typography>
                      </IconButton>
                      <IconButton aria-label="meet" component="a" href={doctor.meet} sx={{ color: 'red', ml: 2 }}>
                        <VideoCallIcon fontSize="large" />
                        <Typography sx={{ ml: 1 }}>Meet</Typography>
                      </IconButton>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default DoctorCard;
