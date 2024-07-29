import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Button, Typography } from '@mui/material';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import bikebg from '../logo/bikebg.jpg';
import { Link, Link as RouterLink } from 'react-router-dom'; 
import { VisuallyHiddenInput } from '@chakra-ui/react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const libraries = ['places'];

const Cyber = () => {
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
        <img src={"https://img.freepik.com/premium-vector/illustration-woman-sitting-desk-with-laptop-looking-stressed_844724-674.jpg?w=740"} />
      </div>
      
      <div style={{ flex: 1, padding: '10px', borderLeft: '1px solid #ccc' }}>
      
        <h2 style={{textAlign:'center'}}>Cyber Complaint</h2>
        <form>
          <div style={{ marginBottom: '10px' }}>

          <TextField
                margin="normal"
                required
                fullWidth
                
                label="Name"
                
                autoFocus
              />
          <TextField
                margin="normal"
                required
                fullWidth                
                label="Age"
                
                autoFocus
              />
          <TextField
                margin="normal"
                required
                fullWidth
                
                label="Phone Number"
                
                autoFocus
              />
          <TextField
                margin="normal"
                required
                fullWidth
                
                label="Your Complaint"
                
                autoFocus
              />
        
    <Typography style={{marginTop:'20px',fontSize:'15px',fontWeight:'bold'}}>Upload proof</Typography>      
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
            
          </div>
          <Link to="/CyberC" style={{ textDecoration: 'none' }}>
      <button
        type="button"
        style={{
          width: '100%',
          fontSize:'20px',
          padding: '15px',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '14px',
          cursor: 'pointer',
        }}
      >
        File Complaint
      </button>
    </Link>
        </form>
      </div>
    </div>
    
  );
};

export default Cyber;
