import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { VisuallyHiddenInput } from '@chakra-ui/react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const Cyber = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [complaintText, setComplaintText] = useState(''); // Updated state name
  const [fileName, setFileName] = useState(''); // State for file name

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFileName(selectedFile ? selectedFile.name : ''); // Update file name state
    console.log(fileName);
  };

  const sendConfirmationEmail = (email) => {
    const templateParams = {
      to_email: email,
    };

    emailjs.send('service_9vq7fh3', 'template_loxl7mn', templateParams, '5CxxHsjoz0dsW4OFC')
      .then((response) => {
        console.log('Confirmation email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Failed to send confirmation email:', error);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const complaintData = {
      name,
      age,
      phoneNumber,
      email,
      complaintText, // Updated key name
      fileName, // Send only the file name
    };

    console.log(complaintData);

    try {
      const response = await axios.post('http://localhost:8080/api/complaints/file', complaintData);
      console.log(response.data);
      sendConfirmationEmail(email);
      alert('Complaint filed successfully');
      navigate('/CyberC');
    } catch (error) {
      console.error('There was an error!', error);
      alert('Failed to file complaint');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', alignItems: 'center' }}>
      <div style={{ flex: 2, height: '100vh', padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src="https://img.freepik.com/premium-vector/illustration-woman-sitting-desk-with-laptop-looking-stressed_844724-674.jpg?w=740"
          alt="Cyber Complaint"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      
      <div style={{ flex: 1, padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ textAlign: 'center' }}>Cyber Complaint</h2>
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Your Complaint"
            value={complaintText} // Updated state usage
            onChange={(e) => setComplaintText(e.target.value)} // Updated state setter
          />
          <Typography style={{ marginTop: '20px', fontSize: '15px', fontWeight: 'bold' }}>Upload proof</Typography>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            style={{ marginBottom: '20px' }}
          >
            Upload file
            <VisuallyHiddenInput type="file" onChange={handleFileChange} />
          </Button>
          {fileName && (
            <Typography variant="body2" style={{ marginBottom: '20px', color: 'green' }}>
              Selected file: {fileName}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            style={{
              width: '100%',
              fontSize: '20px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '14px',
              cursor: 'pointer',
            }}
          >
            File Complaint
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Cyber;
