import React from 'react';
import styled from 'styled-components';
import { Grid, Card as MuiCard, CardContent, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import bikeImage from '../logo/bike ride.png';
import delivery from '../logo/delievery.png';
import rooms from '../logo/rooms.png';
import blood from '../logo/menstruals.png';
import { useNavigate } from 'react-router-dom';
import baby from '../logo/pregnancy.png';
import cyber from '../logo/help.png';
import gym from '../logo/fitness.png';
import talk from '../logo/talk.png';

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

// Styled components for Cards
const CardContainer = styled.div`
  border: 2px dashed #ff66a3;
  padding: 32px;
  margin: 56px 10px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
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

// Service Section
const ServiceSection = styled.div`
  display: flex;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  align-items: center;
  padding: 40px 16px;
  background-color: ${props => (props.reverse ? '#f9f9f9' : '#fff')};
`;

const serviceDetails = [
  { image: bikeImage, text: "Bike Ride", description: "Safe and comfortable bike rides for women.", link: "/bike" },
  { image: delivery, text: "Pick & Drop", description: "Reliable pick and drop services.", link: "/pick-drop" },
  { image: rooms, text: "Rooms", description: "Secure room booking services.", link: "/rooms" },
  { image: blood, text: "Menstruals", description: "Support and supplies for menstrual needs.", link: "/menstruals" },
  { image: baby, text: "Pregnancy", description: "Assistance and counseling for pregnant women.", link: "/pregnancy" },
  { image: cyber, text: "Cyber Crime", description: "Report and get help for cyber crimes.", link: "/cyber-crime" },
  { image: talk, text: "Mental Counselling", description: "Mental health counseling services.", link: "/mental" },
  { image: gym, text: "Fitness", description: "Fitness and wellness services.", link: "/fitness" },
];

// Sample data for the bar chart
const data = [
  { name: 'Jan', Users: 400 },
  { name: 'Feb', Users: 300 },
  { name: 'Mar', Users: 200 },
  { name: 'Apr', Users: 278 },
  { name: 'May', Users: 189 },
  { name: 'Jun', Users: 239 },
  { name: 'Jul', Users: 349 },
  { name: 'Aug', Users: 200 },
  { name: 'Sep', Users: 278 },
  { name: 'Oct', Users: 189 },
  { name: 'Nov', Users: 239 },
  { name: 'Dec', Users: 349 },
];

const Helps = () => {
  return (
    <div>
      <Navbar>
        <NavBrand>HelpHer</NavBrand>
        <NavItems>
          <NavItem to="home" smooth={true} duration={500}>Home</NavItem>
          <NavItem to="services" smooth={true} duration={500} offset={-80}>Services</NavItem>
          <NavItem to="chart" smooth={true} duration={500} offset={-80}>Statistics</NavItem>
          
          <NavItem to="/" smooth={true} duration={500} offset={-80}>Log Out</NavItem>
          
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
              <SignupButton style={{ fontSize: '20px', marginTop: '10px' }}>Ask Help</SignupButton>
            </RouterLink>
          </TextSection>
          <SectionImage src={"https://img.freepik.com/free-vector/breast-cancer-awareness-concept-illustration_23-2148635265.jpg?t=st=1722708140~exp=1722711740~hmac=a184562c6d47ad1955be7adbb63590ad69c8f69505451a6a01870bf571c93fe5&w=740"} alt="HelpHer Services" />
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
                    </CardContent>
                  </Card>
                </RouterLink>
              </Grid>
            ))}
          </Grid>
        </CardContainer>

        <InfoSection id="chart">
            <Typography variant="h2" component="h2" gutterBottom>
              Monthly User Statistics
            </Typography>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Users" fill="#ff66a3" />
            </BarChart>
          </ResponsiveContainer>
        </InfoSection>
      </ContentContainer>
    </div>
  );
};

export default Helps;
