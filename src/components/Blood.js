import React, { useEffect, useState } from 'react';
import { TextField, Autocomplete, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import bikebg from '../logo/period.jpg';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const locations = [
  { label: 'Sri Krishna College of Technology', value: 'location1' },
  { label: 'Gandhipuram', value: 'location2' },
  { label: 'Kovaipudur', value: 'location3' },
  { label: 'Ukkadam', value: 'location4' },
  // Add more locations as needed
];

const napkinBrands = [
  { label: 'Whisper' },
  { label: 'Stayfree' },
  { label: 'Sofy' },
  { label: 'Kotex' },
  { label: 'Nua' },
  // Add more brands as needed
];

const Blood = () => {
  const [inputValue, setInputValue] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [napkinBrand, setNapkinBrand] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleMapClick = async (event) => {
    // Map click handler logic
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

  useEffect(() => {
    const storedEmail = localStorage.getItem('username') || sessionStorage.getItem('username');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!location) {
      setError('Please enter a location');
      return;
    }
    if (!napkinBrand) {
      setError('Please select a napkin brand');
      return;
    }

    const periodRequest = {
      location,
      email,
      napkinBrand, // Add napkin brand to the request payload
    };

    try {
      const response = await fetch('http://localhost:8080/api/period-requests/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(periodRequest),
      });

      if (response.ok) {
        sendConfirmationEmail(email);
        alert('Request sent successfully');
        navigate('/BloodC');
      } else {
        alert('Failed to send request');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <div style={{ display: 'flex', width: '100%', height: '630px' }}>
      <div style={{ flex: 2, padding: '10px', position: 'relative' }}>
        <iframe
          id="mapIframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.472888122254!2d76.92319257408951!3d10.927606756388924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b823c4ca3d5%3A0x23416a992879b7c4!2sSri%20Krishna%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1721919285291!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div
          onClick={handleMapClick}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            cursor: 'pointer',
            backgroundColor: 'transparent',
          }}
        ></div>
      </div>

      <div style={{ flex: 1, padding: '10px', borderLeft: '1px solid #ccc' }}>
        <img
          src={bikebg}
          alt="Bike"
          style={{ margin: '10px 10px', borderRadius: '50px', marginLeft: '70px' }}
          height="300px"
          width="300px"
        />
        <h2>Your Current Location</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <Autocomplete
              freeSolo
              options={locations.map((option) => option.label)}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
              onChange={(event, newValue) => setLocation(newValue || '')}
              renderInput={(params) => <TextField {...params} label="Your Location" />}
            />
          </div>

          <FormControl fullWidth style={{ marginBottom: '20px' }}>
            <InputLabel>Select Napkin Brand</InputLabel>
            <Select
              value={napkinBrand}
              onChange={(event) => setNapkinBrand(event.target.value)}
            >
              {napkinBrands.map((brand) => (
                <MenuItem key={brand.label} value={brand.label}>
                  {brand.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button
            type="submit"
            style={{
              width: '100%',
              fontSize: '20px',
              padding: '15px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '14px',
              cursor: 'pointer',
            }}
          >
            Help Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Blood;
