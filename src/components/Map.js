import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Button } from '@mui/material';
import bikebg from '../logo/bikebg.jpg';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Map = () => {
  const locations = [
    { label: 'Sri Krishna College of Technology', value: 'location1' },
    { label: 'Gandhipuram', value: 'location2' },
    { label: 'Kovaipudur', value: 'location3' },
  ];

  const [pickupValue, setPickupValue] = useState('');
  const [destinationValue, setDestinationValue] = useState('');
  const [pickupOptions, setPickupOptions] = useState(locations);
  const [destinationOptions, setDestinationOptions] = useState(locations);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch email from localStorage or sessionStorage
    const storedEmail = localStorage.getItem('username') || sessionStorage.getItem('username');
    if (storedEmail) {
      setEmail(storedEmail);
    }
    console.log('Fetched Email:', storedEmail); // Debugging
  }, []);

  const handlePickupSelect = (event, value) => {
    setPickupValue(value);
    console.log('Selected Pickup Location:', value);
  };
  
  const sendConfirmationEmail = (email) => {
    const templateParams = {
      to_email: email,
    };

    emailjs.send('service_9vq7fh3', 'template_loxl7mn', templateParams, '5CxxHsjoz0dsW4OFC')
      .then((response) => {
        console.log('Confirmation email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Failed to send confirmation email:', error);
      });
  };


  const handleDestinationSelect = (event, value) => {
    setDestinationValue(value);
    console.log('Selected Destination Location:', value);
  };

  const handleSubmit = async () => {
    if (!pickupValue || !destinationValue) {
      alert('Please fill in both the pickup and destination fields.');
      return;
    }

    const rideRequest = {
      pickupLocation: pickupValue,
      destinationLocation: destinationValue,
      email: email, // Ensure this matches the backend field
      // Email is directly sent here
    };

    console.log('Ride Request:', rideRequest); // Debugging

    try {
      const response = await fetch('http://localhost:8080/api/ride-requests/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rideRequest),
      });

      

      if (response.ok) {
        sendConfirmationEmail(email);
        alert('Ride request sent successfully');
        navigate('/MapC');
      } else {
        alert('Failed to send ride request');
        const errorText = await response.text();
        console.error('Error Response:', errorText); // Debugging
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the ride request.');
    }
  };

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ flex: 2, padding: '10px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.472888122254!2d76.92319257408951!3d10.927606756388924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b823c4ca3d5%3A0x23416a992879b7c4!2sSri%20Krishna%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1721919285291!5m2!1sen!2sin"
          width="100%"
          height="100vh"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      <div style={{ flex: 1, padding: '10px', borderLeft: '1px solid #ccc' }}>
        <img
          src={bikebg}
          alt="Bike"
          style={{ margin: '10px 10px', borderRadius: '50px', marginLeft: '70px' }}
          height="300px"
          width="300px"
        />
        <h2>Book a Ride</h2>
        <form>
          <div style={{ marginBottom: '10px' }}>
            <Autocomplete
              freeSolo
              options={pickupOptions.map((option) => option.label)}
              inputValue={pickupValue}
              onInputChange={(event, newInputValue) => setPickupValue(newInputValue)}
              onChange={handlePickupSelect}
              renderInput={(params) => (
                <TextField {...params} sx={{ mb: 2 }} label="Enter Your Pickup Location" />
              )}
            />
            <Autocomplete
              freeSolo
              options={destinationOptions.map((option) => option.label)}
              inputValue={destinationValue}
              onInputChange={(event, newInputValue) => setDestinationValue(newInputValue)}
              onChange={handleDestinationSelect}
              renderInput={(params) => (
                <TextField {...params} sx={{ mb: 2 }} label="Enter Your Destination" />
              )}
            />
          </div>
          <Button
            type="button"
            onClick={handleSubmit}
            style={{
              width: '100%',
              fontSize: '20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '14px',
              cursor: 'pointer',
            }}
          >
            Pick Me
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Map;
