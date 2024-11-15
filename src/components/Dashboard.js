import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Grid,
  Paper,
  Button,
  Typography,
  IconButton,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  AppBar,
  Toolbar,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Add,
  Edit,
  Delete,
  People,
  DirectionsBike,
  Security,
  LocalHospital,
  LocalShipping,
  ExitToApp
} from '@mui/icons-material';
import Sidebar from './Sidebar';
import styles from './Dashboard.module.css';

const drawerWidth = 100;

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [bikeRides, setBikeRides] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [napkinRequests, setNapkinRequests] = useState([]);
  const [deliveryRequests, setDeliveryRequests] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState('');
  const [currentItem, setCurrentItem] = useState(null);
  const [selectedView, setSelectedView] = useState('users');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phonenumber: '',
    name: '',
    age: '',
    phoneNumber: '',
    complaintText: '',
    address: '',
    location: '',
    requestDate: '',
    pickupLocation: '',
    dropLocation: '',
    deliveryDate: ''
  });

  useEffect(() => {
    switch (selectedView) {
      case 'users':
        fetchUsers();
        break;
      case 'bikeRides':
        fetchBikeRides();
        break;
      case 'cyberCrime':
        fetchComplaints();
        break;
      case 'napkinRequests':
        fetchNapkinRequests();
        break;
      case 'pickAndDrop':
        fetchDeliveryRequests();
        break;
      default:
        break;
    }
  }, [selectedView]);

  const fetchUsers = () => {
    axios.get('http://localhost:8080/login/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  };

  const fetchBikeRides = () => {
    axios.get('http://localhost:8080/api/ride-requests/getall')
      .then(response => setBikeRides(response.data))
      .catch(error => console.error('Error fetching bike rides:', error));
  };

  const fetchComplaints = () => {
    axios.get('http://localhost:8080/api/complaints/getall')
      .then(response => setComplaints(response.data))
      .catch(error => console.error('Error fetching complaints:', error));
  };

  const fetchNapkinRequests = () => {
    axios.get('http://localhost:8080/api/period-requests/getall')
      .then(response => setNapkinRequests(response.data))
      .catch(error => console.error('Error fetching napkin requests:', error));
  };

  const fetchDeliveryRequests = () => {
    axios.get('http://localhost:8080/api/delivery-requests/getall')
      .then(response => setDeliveryRequests(response.data))
      .catch(error => console.error('Error fetching delivery requests:', error));
  };

  const handleClickOpen = (type, item) => {
    setDialogType(type);
    setCurrentItem(item);
    setFormData(item ? { ...item } : { username: '', email: '', phonenumber: '', name: '', age: '', phoneNumber: '', complaintText: '', address: '', location: '', requestDate: '', pickupLocation: '', dropLocation: '', deliveryDate: '' });
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setCurrentItem(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    handleClose();
  };

  const handleDelete = (type, id) => {
  };

  const renderTable = (data = [], type) => (
    <TableContainer component={Paper} className={styles.dashboardTableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            {Object.keys(data[0] || {}).map((key) => (
              <TableCell key={key}>{key}</TableCell>
            ))}
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              {Object.values(item).map((value, index) => (
                <TableCell key={index}>{value}</TableCell>
              ))}
              <TableCell>
                <IconButton onClick={() => handleClickOpen(type, item)}>
                  <Edit />
                </IconButton>
                <IconButton onClick={() => handleDelete(type, item.id)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
        }}
      >
        <Toolbar />
        <Sidebar onSelectView={setSelectedView} />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, marginLeft: `${drawerWidth}px` }}
      >
        <Toolbar />
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={styles.dashboardPaperContainer}>
              <Button
  variant="contained"
  startIcon={<Add />}
  onClick={() => handleClickOpen(selectedView)}
  sx={{
    backgroundColor: "#ff66a3",
    "&:hover": { backgroundColor: "#ff66a3" }
  }}
>
  Add {selectedView}
</Button>


                {selectedView === 'users' && renderTable(users, 'users')}
                {selectedView === 'bikeRides' && renderTable(bikeRides, 'bikeRides')}
                {selectedView === 'cyberCrime' && renderTable(complaints, 'cyberCrime')}
                {selectedView === 'napkinRequests' && renderTable(napkinRequests, 'napkinRequests')}
                {selectedView === 'pickAndDrop' && renderTable(deliveryRequests, 'pickAndDrop')}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>{currentItem ? 'Edit' : 'Add'} {dialogType}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="username"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            value={formData.username}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {currentItem ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Dashboard;
