import React, { useEffect, useState, useCallback } from 'react';
import { Combobox } from 'react-widgets';
import 'react-widgets/styles.css';
import { useLoadScript } from '@react-google-maps/api';

const libraries = ['places'];

const Demo = ({ onPlaceSelect }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Use environment variable
    libraries,
  });

  const [sessionToken, setSessionToken] = useState(null);
  const [autocompleteService, setAutocompleteService] = useState(null);
  const [placesService, setPlacesService] = useState(null);
  const [predictionResults, setPredictionResults] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [fetchingData, setFetchingData] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;

    setAutocompleteService(new window.google.maps.places.AutocompleteService());
    setPlacesService(new window.google.maps.places.PlacesService(document.createElement('div')));
    setSessionToken(new window.google.maps.places.AutocompleteSessionToken());
  }, [isLoaded]);

  const fetchPredictions = useCallback(
    (inputValue) => {
      if (!autocompleteService || !inputValue) {
        return;
      }

      setFetchingData(true);

      const request = { input: inputValue, sessionToken };
      autocompleteService.getPlacePredictions(request, (response) => {
        setPredictionResults(response ? response.predictions : []);
        setFetchingData(false);
      });
    },
    [autocompleteService, sessionToken]
  );

  const onInputChange = useCallback(
    (value) => {
      if (typeof value === 'string') {
        setInputValue(value);
        fetchPredictions(value);
      }
    },
    [fetchPredictions]
  );

  const onSelect = useCallback(
    (prediction) => {
      if (!placesService || typeof prediction === 'string') return;

      setFetchingData(true);

      const detailRequestOptions = {
        placeId: prediction.place_id,
        fields: ['geometry', 'name', 'formatted_address'],
        sessionToken,
      };

      placesService.getDetails(detailRequestOptions, (placeDetails) => {
        onPlaceSelect(placeDetails);
        setInputValue(placeDetails?.formatted_address || '');
        setSessionToken(new window.google.maps.places.AutocompleteSessionToken());
        setFetchingData(false);
      });
    },
    [onPlaceSelect, placesService, sessionToken]
  );

  if (loadError) return <div>Error loading Google Maps API</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="autocomplete-container">
      <Combobox
        placeholder="Search for a place"
        data={predictionResults}
        dataKey="place_id"
        textField="description"
        value={inputValue}
        onChange={onInputChange}
        onSelect={onSelect}
        busy={fetchingData}
        filter={() => true}
        focusFirstItem={true}
        hideEmptyPopup
        hideCaret
      />
    </div>
  );
};

export default Demo;
