import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import bikebg from '../logo/periods.jpg';



const BloodC = () => {  
  return (
    
    
      
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'  // Makes the parent container full height of the viewport
      }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img
            src={bikebg}
            alt="Bike"
            style={{ margin: '10px 10px', borderRadius: '50px', marginLeft: '70px',height:'600px',width:'600px' }}
            height="300px"
            width="300px"
          />
          <div style={{fontSize:'30px'}}>
            <h2>Don't Worry</h2>
            <h3>Our team will reach in a minute!</h3>
          </div>
        </div>
      </div>
    
    
  );
};

export default BloodC;


