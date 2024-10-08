import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import axios from 'axios';
import bikebg from '../logo/travel.jpg';
import { useNavigate } from 'react-router-dom';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const locations = [
  { label: 'Sri Krishna College of Technology', value: 'location1' },
  { label: 'Gandhipuram', value: 'location2' },
  { label: 'Kovaipudur', value: 'location3' },
  // Add more locations as needed
];

const Room = () => {
  const [pickupValue, setPickupValue] = useState('');
  const [destinationValue, setDestinationValue] = useState('');
  const [pickupOptions, setPickupOptions] = useState(locations);
  const [destinationOptions, setDestinationOptions] = useState(locations);
  const [bookingDate, setBookingDate] = useState(dayjs());
  const [vacatingDate, setVacatingDate] = useState(dayjs());
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const storedEmail = localStorage.getItem('username') || sessionStorage.getItem('username');
    if (storedEmail) {
      setEmail(storedEmail);
    }
    console.log('Fetched Email:', storedEmail); // Debugging
  }, []);

  const handlePickupSelect = (event, value) => {
    setPickupValue(value);
    console.log('Selected Pickup Location:', value);
  };

  const handleDestinationSelect = (event, value) => {
    setDestinationValue(value);
    console.log('Selected Destination Location:', value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/room-bookings/book', {
        pickupLocation: pickupValue,
        destinationLocation: destinationValue,
        bookingDate: bookingDate.toDate(),
        vacatingDate: vacatingDate.toDate(),
        email: email, // Pass the email from local storage
      });
      console.log('Room booked successfully:', response.data);
      window.alert('Room booked successfully!');
      navigate('/RoomsC'); // Redirect to /RoomsC after successful booking
    } catch (error) {
      console.error('Error booking room:', error);
      window.alert('Error booking room. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ flex: 2, padding: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
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

      <div style={{ flex: 1, padding: '20px', borderLeft: '1px solid #ccc' }}>
        <img
          src={bikebg}
          alt="Travel Background"
          style={{ display: 'block', margin: '0 auto 20px', borderRadius: '10px' }}
          height="300px"
          width="300px"
        />
        <h2 style={{ marginBottom: '15px' }}>Book Rooms</h2>
        <form>
          <div style={{ marginBottom: '20px' }}>
            <Autocomplete
              freeSolo
              options={pickupOptions.map((option) => option.label)}
              inputValue={pickupValue}
              onInputChange={(event, newInputValue) => setPickupValue(newInputValue)}
              onChange={handlePickupSelect}
              renderInput={(params) => (
                <TextField {...params} sx={{ mb: 2 }} label="Enter City" />
              )}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Day of Booking"
                value={bookingDate}
                onChange={(newValue) => setBookingDate(newValue)}
                renderInput={(params) => <TextField {...params} variant="outlined" />}
              />
            </LocalizationProvider>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Day of Vacating"
                value={vacatingDate}
                onChange={(newValue) => setVacatingDate(newValue)}
                renderInput={(params) => <TextField {...params} variant="outlined" />}
              />
            </LocalizationProvider>
          </div>
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
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#45a049'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'}
            onClick={handleSubmit}
          >
            Book Room
          </button>
        </form>
      </div>
    </div>
  );
};

export default Room;
