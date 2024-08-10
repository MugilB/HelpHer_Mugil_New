import React from 'react';
import styled from 'styled-components';
import ss from '../logo/warning.avif'

// Define the styled component for the emergency alert background
const EmergencyAlert = styled.div`
  background-color: white; /* Emergency red color */
  height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  color: red; /* White text color */
  font-size: 5rem; /* Font size for the text */
  font-weight: bold; /* Bold text */
`;

// Create the functional component
const SosC = () => {
  return (
    <EmergencyAlert>
      <img src={ss} height='400px' weight='400px'/>
      Alert Received!
    </EmergencyAlert>
  );
}

export default SosC;
