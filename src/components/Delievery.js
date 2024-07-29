import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { Link } from 'react-router-dom';

const locations = [
    { label: 'Sri Krishna College of Technology', value: 'location1' },
    { label: 'Gandhipuram', value: 'location2' },
    { label: 'Kovaipudur', value: 'location3' },
    // Add more locations as needed
];

const Delievery = () => {
    const [pickupValue, setPickupValue] = useState('');
    const [destinationValue, setDestinationValue] = useState('');
    const [pickupOptions, setPickupOptions] = useState(locations);
    const [destinationOptions, setDestinationOptions] = useState(locations);

    const handlePickupSelect = (event, value) => {
        setPickupValue(value);
        console.log('Selected Pickup Location:', value);
    };

    const handleDestinationSelect = (event, value) => {
        setDestinationValue(value);
        console.log('Selected Destination Location:', value);
    };

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
                    src="https://img.freepik.com/free-vector/illustration-person-doing-delivery-activities_23-2148504098.jpg?t=st=1722159457~exp=1722163057~hmac=7793cc5eaeff2d62efec8a2acba54d22723ac9878787d4f4763d41fbd722eec3&w=740"
                    alt="Bike Background"
                    style={{ margin: '10px 10px', borderRadius: '50px', marginLeft: '70px' }}
                    height="300px"
                    width="300px"
                />
                <h2>Pick My Things</h2>
                <form>
                    <div style={{ marginBottom: '10px' }}>
                        <Autocomplete
                            freeSolo
                            options={pickupOptions.map((option) => option.label)}
                            inputValue={pickupValue}
                            onInputChange={(event, newInputValue) => setPickupValue(newInputValue)}
                            onChange={handlePickupSelect}
                            renderInput={(params) => (
                                <TextField {...params} sx={{ mb: 2 }} label="Enter Pick Up Point" />
                            )}
                        />
                        <Autocomplete
                            freeSolo
                            options={destinationOptions.map((option) => option.label)}
                            inputValue={destinationValue}
                            onInputChange={(event, newInputValue) => setDestinationValue(newInputValue)}
                            onChange={handleDestinationSelect}
                            renderInput={(params) => (
                                <TextField {...params} sx={{ mb: 2 }} label="Enter Destination" />
                            )}
                        />
                    </div>
                    <Link to="/DelieveryC" style={{ textDecoration: 'none' }}>
                        <button
                            type="button"
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
                            Pick It
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Delievery;
