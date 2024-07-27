import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};

function MapContainer() {
  const [selectedPlace, setSelectedPlace] = React.useState(null);

  const onMarkerClick = (props) => {
    setSelectedPlace(props);
  };

  const onInfoWindowClose = () => {
    setSelectedPlace(null);
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyD3K9vj9QcRbykb3bwqwtZFbXaZcCWoH9Y"  // Replace with your actual API key
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        <Marker
          position={center}
          onClick={() => onMarkerClick({ name: 'Current location' })}
        />

        {selectedPlace && (
          <InfoWindow
            position={center}
            onCloseClick={onInfoWindowClose}
          >
            <div>
              <h1>{selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
