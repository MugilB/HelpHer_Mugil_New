import React from 'react';
import { Wrapper, Status, Map, Marker } from '@googlemaps/react-wrapper';

// Custom map styles (example)
const customMapStyles = [
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#e9e9e9' }, { lightness: 17 }],
  },
  // Add more styles as needed
];

// MyMarker Component
function MyMarker() {
  return <Marker position={{ lat: 37.7749, lng: -122.4194 }} />;
}

// Render function to handle the map loading status
const render = (status) => {
  if (status === Status.LOADING) return <div>Loading...</div>;
  if (status === Status.FAILURE) return <div>Error loading map</div>;
  return null;
};

function MyApp() {
  return (
    <div style={{ height: '100vh' }}>
      <Wrapper apiKey="YOUR_API_KEY" render={render}>
        <Map
          center={{ lat: 37.7749, lng: -122.4194 }}
          zoom={8}
          options={{ styles: customMapStyles, disableDefaultUI: true }}
          style={{ height: '100%', width: '100%' }}
        >
          <MyMarker />
        </Map>
      </Wrapper>
    </div>
  );
}

export default MyApp;
