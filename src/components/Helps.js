import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import { Grid, Card as MuiCard, CardContent, Typography, TextField, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import bikeImage from '../logo/bike ride.png';
import delivery from '../logo/delievery.png';
import rooms from '../logo/rooms.png';
import blood from '../logo/menstruals.png';
import baby from '../logo/pregnancy.png';
import cyber from '../logo/help.png';
import gym from '../logo/fitness.png';
import talk from '../logo/talk.png';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import Pricing from './Pricing';

// Styled components
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

const CardDescription = styled(Typography)`
  text-align: center;
  margin-top: 4px;
`;

// Styled components for Cards
const CardContainer = styled.div`
  border: 2px dashed #ff66a3;
  padding: 32px;
  margin: 56px 10px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
`;

const Card = styled(MuiCard)`
  border: 1px solid #ff66a3;
  margin: 8px;
`;

const CardTitle = styled(Typography)`
  font-size: 1.2em;
  color: #ff66a3;
  text-align: center;
`;

// Styled components for the Text and Image Section
const InfoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 16px;
  background-color: #fff;
  margin-top: 60px;
`;

const TextSection = styled.div`
  flex: 1;
  padding: 16px;
`;

const SectionImage = styled.img`
  max-width: 50%;
  height: auto;
`;

// Main content container
const ContentContainer = styled.div`
  margin-top: 80px; /* Adjusted margin-top for fixed navbar */
`;

const EmergencyButton = styled(Button)`
  background-color: #ff4d4d;
  color: white;
  border-radius: 100px;

  &:hover {
    background-color: #ff9999;
  }
`;

const SignupButton = styled(Button)`
  background-color: #ff66a3 !important;
  color: white !important;
  border-radius: 100px !important;
`;

// Feedback Section Styled Components
const FeedbackSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 16px;
  background-color: #fff;
  margin-top: 60px;
`;

const FeedbackForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
`;

const FeedbackButton = styled(Button)`
  background-color: #ff66a3 !important;
  color: white !important;
  border-radius: 100px !important;
  margin-top: 20px;
`;

const serviceDetails = [
  { image: bikeImage, text: "Bike Ride", description: "Safe and comfortable bike rides.", link: "/bike" },
  { image: delivery, text: "Pick & Drop", description: "Reliable pick and drop services.", link: "/pick-drop" },
  { image: rooms, text: "Rooms", description: "Secure room booking services.", link: "/rooms" },
  { image: blood, text: "Menstruals", description: "Support and supplies for menstrual.", link: "/menstruals" },
  { image: baby, text: "Pregnancy", description: "Gynaecologist Counselling.", link: "/pregnancy" },
  { image: cyber, text: "Cyber Crime", description: "Report and get help for cyber crimes.", link: "/cyber-crime" },
  { image: talk, text: "Mental Counselling", description: "Mental health counseling services.", link: "/mental" },
  { image: gym, text: "Fitness", description: "Fitness and wellness services.", link: "/fitness" },
];



const Helps = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Using useNavigate for navigation

  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const storedEmail = localStorage.getItem('username') || sessionStorage.getItem('username');
    if (storedEmail) {
        setEmail(storedEmail);
    }
    console.log('Fetched Email:', storedEmail); // Debugging
  }, []);

  const sendConfirmationEmail = (email) => {
    const templateParams = {
      to_email: email,
    };

    emailjs.send('service_9vq7fh3', 'template_kac3yym', templateParams, '5CxxHsjoz0dsW4OFC')
      .then((response) => {
        console.log('Confirmation email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Failed to send confirmation email:', error);
      });
  };

  const handleChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare feedback data
    const feedbackData = {
      name: feedback.name,
      email: feedback.email,
      message: feedback.message,
    };

    try {
      // Make POST request to backend
      const response = await fetch('http://localhost:8080/api/feedback/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if(response.ok)
      {
        sendConfirmationEmail(email);
      }

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Feedback submitted:', result);

      // Reset the form after successful submission
      setFeedback({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  const handleLogout = () => {
    navigate('/'); // Redirect to /main after logout
  };

  return (
    <div>
      <Navbar>
        <NavBrand>HelpHer</NavBrand>
        <NavItems>
          <NavItem to="home" smooth={true} duration={500}>Home</NavItem>
          <NavItem to="services" smooth={true} duration={500} offset={-80}>Services</NavItem>
          <NavItem to="feedback" smooth={true} duration={500} offset={-80}>Feedback</NavItem>
          <NavItem onClick={handleLogout} smooth={true} duration={500} offset={-80}>Log Out</NavItem>
        </NavItems>
      </Navbar>
      <ContentContainer>
        <InfoSection id="home">
          <TextSection>
            <Typography variant="h2" component="h2" gutterBottom>
              Our <span style={{ color: '#ff66a3' }}>Service</span>
            </Typography>
            <Typography variant="body1" style={{ marginTop: '16px', fontSize: '25px' }}>
              Our HelpHer team provides Sanitary Napkins to women at their location during critical periods.
            </Typography>
            <RouterLink to="/menstruals" style={{ textDecoration: 'none' }}>
              <SignupButton style={{ fontSize: '20px', marginTop: '10px' }}>Order Now</SignupButton>
            </RouterLink>
          </TextSection>
          <SectionImage src="https://img.freepik.com/free-vector/breast-cancer-awareness-concept-illustration_23-2148635265.jpg?t=st=1722708140~exp=1722711740~hmac=a184562c6d47ad1955be7adbb63590ad69c8f69505451a6a01870bf571c93fe5&w=740" alt="HelpHer Services" />
        </InfoSection>
        
        <CardContainer id="services">
          <Grid style={{ textAlign: 'center', fontSize: '35px' }}>Other Services</Grid>
          <Grid container spacing={2}>
            {serviceDetails.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <RouterLink to={service.link} style={{ textDecoration: 'none' }}>
                  <Card>
                    <CardContent>
                      <img src={service.image} height="50px" width="50px" alt={service.text} style={{ display: 'block', margin: '0 auto' }} />
                      <CardTitle variant="h5" component="div">
                        {service.text}
                      </CardTitle>
                      <CardDescription variant="body2">
            {service.description}
          </CardDescription>
                    </CardContent>
                  </Card>
                </RouterLink>
              </Grid>
            ))}
          </Grid>
        </CardContainer>

        <FeedbackSection id="feedback">
        <Typography variant="h2" component="h2" sx={{textAlign:'center',marginLeft:'10px'}}>
            We value your <span style={{ color: '#ff66a3' }}>Feedback</span>
          </Typography>
          <FeedbackForm onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              value={feedback.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              name="email"
              value={feedback.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              name="message"
              value={feedback.message}
              onChange={handleChange}
              required
            />
            <FeedbackButton type="submit">Submit Feedback</FeedbackButton>
          </FeedbackForm>
        </FeedbackSection>
        
      </ContentContainer>
    </div>
  );
};

export default Helps;
