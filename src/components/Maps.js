import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Box, Button, Typography } from '@mui/material';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Link } from 'react-router-dom';

const libraries = ['places'];

const Maps = () => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [pickUpPoint, setPickUpPoint] = useState(null);
  const [destinationPoint, setDestinationPoint] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: 10.927606756388924, lng: 76.92319257408951 });

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  useEffect(() => {
    if (!isLoaded) return;

    const autocompleteService = new window.google.maps.places.AutocompleteService();
    const placesService = new window.google.maps.places.PlacesService(document.createElement('div'));

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

  const handlePlaceSelect = (event, value, type) => {
    if (value) {
      const placesService = new window.google.maps.places.PlacesService(document.createElement('div'));
      placesService.getDetails({ placeId: value.placeId }, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          const location = place.geometry.location;
          if (type === 'pickUp') {
            setPickUpPoint({ label: value.label, lat: location.lat(), lng: location.lng() });
            setMapCenter({ lat: location.lat(), lng: location.lng() });
          } else {
            setDestinationPoint({ label: value.label, lat: location.lat(), lng: location.lng() });
            setMapCenter({ lat: location.lat(), lng: location.lng() });
          }
        }
      });
    }
  };

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    if (!pickUpPoint) {
      setPickUpPoint({ label: `Lat: ${lat}, Lng: ${lng}`, lat, lng });
      setMapCenter({ lat, lng });
    } else if (!destinationPoint) {
      setDestinationPoint({ label: `Lat: ${lat}, Lng: ${lng}`, lat, lng });
    }
  };

  if (loadError) {
    console.error('Google Maps API load error:', loadError);
    return <div>Error loading Google Maps API</div>;
  }

  return (
    <div className="bike-ride-page">
      <Box className="map-container" style={{ width: '100%', height: '500px' }}>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            zoom={15}
            center={mapCenter}
            onClick={handleMapClick}
          >
            {pickUpPoint && <Marker position={{ lat: pickUpPoint.lat, lng: pickUpPoint.lng }} />}
            {destinationPoint && <Marker position={{ lat: destinationPoint.lat, lng: destinationPoint.lng }} />}
          </GoogleMap>
        )}
      </Box>

      <Box className="booking-form">
        {/* <img
          src={bikebg}
          alt="Bike Icon"
          style={{ margin: '10px 0', borderRadius: '0%', marginBottom: '20px' }}
          height="150px"
          width="150px"
        /> */}
        <Typography variant="h4" gutterBottom>Book a Ride</Typography>
        <Box component="form" width="100%" maxWidth="400px" display="flex" flexDirection="column">
          <Autocomplete
            freeSolo
            options={options}
            getOptionLabel={(option) => option.label || ''}
            inputValue={pickUpPoint ? pickUpPoint.label : inputValue}
            onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
            onChange={(event, value) => handlePlaceSelect(event, value, 'pickUp')}
            renderInput={(params) => (
              <TextField {...params} label="Enter Pick Up Point" variant="outlined" margin="normal" fullWidth />
            )}
          />
          <Autocomplete
            freeSolo
            options={options}
            getOptionLabel={(option) => option.label || ''}
            inputValue={destinationPoint ? destinationPoint.label : inputValue}
            onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
            onChange={(event, value) => handlePlaceSelect(event, value, 'destination')}
            renderInput={(params) => (
              <TextField {...params} label="Enter Destination" variant="outlined" margin="normal" fullWidth />
            )}
          />
          <Link to="/pickme" style={{ textDecoration: 'none', marginTop: '20px' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              style={{ padding: '15px', fontSize: '18px', borderRadius: '8px', backgroundColor: '#E37383' }}
            >
              Pick Me
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default Maps;
