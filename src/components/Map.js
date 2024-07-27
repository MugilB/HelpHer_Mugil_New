import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import bikebg from '../logo/bikebg.jpg';
import { Link, Link as RouterLink } from 'react-router-dom'; 

const libraries = ['places'];

const Map = () => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Use environment variable
    libraries,
  });

  useEffect(() => {
    if (!isLoaded) return;

    const autocompleteService = new window.google.maps.places.AutocompleteService();

    const fetchOptions = (input) => {
      if (input === '') {
        setOptions([]);
        return;
      }

      autocompleteService.getPlacePredictions({ input }, (predictions, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setOptions(predictions.map((prediction) => ({
            label: prediction.description,
            placeId: prediction.place_id,
          })));
        } else {
          setOptions([]);
        }
      });
    };

    fetchOptions(inputValue);
  }, [inputValue, isLoaded]);

  const handlePlaceSelect = (event, value) => {
    if (value) {
      console.log('Selected Place:', value);
    }
  };

  if (loadError) return <div>Error loading Google Maps API</div>;

  return (
    
    <div style={{ display: 'flex', width: '100%', height: '600px' }}>
      <div style={{ flex: 2, padding: '10px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.472888122254!2d76.92319257408951!3d10.927606756388924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b823c4ca3d5%3A0x23416a992879b7c4!2sSri%20Krishna%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1721919285291!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      <div style={{ flex: 1, padding: '10px', borderLeft: '1px solid #ccc' }}>
      <img
        src={bikebg}
        alt="Google Logo"
        style={{ margin: '10px 10px',borderRadius:'50px',marginLeft:'70px' }}
        height="300px"
        width="300px"
      />
        <h2>Book a Ride</h2>
        <form>
          <div style={{ marginBottom: '10px' }}>

            <Autocomplete
              freeSolo
              options={options}
              getOptionLabel={(option) => option.label || ''}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
              onChange={handlePlaceSelect}
              renderInput={(params) => <TextField {...params} label="Enter Destination" />}
            />
            
          </div>
          <Link to="/MapC" style={{ textDecoration: 'none' }}>
      <button
        type="button"
        style={{
          width: '100%',
          fontSize:'20px',
          padding: '15px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '14px',
          cursor: 'pointer',
        }}
      >
        Pick Me
      </button>
    </Link>
        </form>
      </div>
    </div>
    
  );
};

export default Map;
