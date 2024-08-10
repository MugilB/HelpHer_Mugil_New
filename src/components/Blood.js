import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import bikebg from '../logo/period.jpg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const locations = [
  { label: 'Sri Krishna College of Technology', value: 'location1' },
  { label: 'Gandhipuram', value: 'location2' },
  { label: 'Kovaipudur', value: 'location3' },
  // Add more locations as needed
];

const Blood = () => {
  const [inputValue, setInputValue] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleMapClick = async (event) => {
    const iframe = document.getElementById('mapIframe');
    const rect = iframe.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const latLng = screenCoordsToLatLng(x, y);
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng.lat},${latLng.lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
    );
    const data = await response.json();

    if (data.status === 'OK' && data.results[0]) {
      setLocation(data.results[0].formatted_address);
    } else {
      alert('No address found');
    }
  };

  const screenCoordsToLatLng = (x, y) => {
    const topLat = 10.9306; // Latitude of the top edge of the iframe
    const bottomLat = 10.9246; // Latitude of the bottom edge of the iframe
    const leftLng = 76.9202; // Longitude of the left edge of the iframe
    const rightLng = 76.9262; // Longitude of the right edge of the iframe

    const iframeHeight = 630; // Adjust based on actual iframe height
    const iframeWidth = 800; // Adjust based on actual iframe width

    const lat = topLat - ((y / iframeHeight) * (topLat - bottomLat));
    const lng = leftLng + ((x / iframeWidth) * (rightLng - leftLng));

    return { lat, lng };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!location) {
      setError('Please enter a location');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/period-requests/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          location: location, // Send the location data to the backend
        }),
      });

      if (response.ok) {
        alert('Request sent successfully');
        navigate('/BloodC'); // Redirect to the next page
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
