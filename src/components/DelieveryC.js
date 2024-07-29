import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import bikebg from '../logo/bikebg1.avif';



const DelieveryC = () => {  
  return (
    
    
      
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'  // Makes the parent container full height of the viewport
      }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img
            src={"https://img.freepik.com/free-vector/delivery-man-scooter-with-flat-design_23-2147674796.jpg?t=st=1722159619~exp=1722163219~hmac=6c2813a9509abbb24a80e1e5667589f1c869f4a7e37d2ec075d94af21c88688b&w=740"}
            alt="Bike"
            style={{ margin: '10px 10px', borderRadius: '50px', marginLeft: '70px',height:'600px',width:'600px' }}
            height="300px"
            width="300px"
          />
          <div style={{fontSize:'30px'}}>
            <h2>Request Placed</h2>
            <h3>We'll be there to relocate your things</h3>
          </div>
        </div>
      </div>
    
    
  );
};

export default DelieveryC;
