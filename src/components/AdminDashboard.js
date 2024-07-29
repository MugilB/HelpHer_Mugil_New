import React, { useState } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import CountUp from 'react-countup';
import {
  CssBaseline,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  IconButton,
} from '@mui/material';
import { Dashboard as DashboardIcon, Group, People, Add as AddIcon } from '@mui/icons-material';

// Mock data for Dashboard
const totalUsers = 1500;
const activeUsers = 800;
const serviceUsage = {
  Periods: 400,
  BikeRide: 300,
  Rooms: 100,
};

// Initial mock data for Manage Users
const initialUsers = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

// Initial mock data for Manage Employees
const initialEmployees = [
  { id: 1, name: 'David', position: 'Manager' },
  { id: 2, name: 'Eve', position: 'Developer' },
  { id: 3, name: 'Frank', position: 'Designer' },
];

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Admin Dashboard</Typography>
    </Toolbar>
  </AppBar>
);

const Sidebar = () => (
  <Drawer
    variant="permanent"
    sx={{
      width: 240,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
    }}
  >
    <List>
      <ListItem button component={Link} to="/dashboard">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/manage-users">
        <ListItemIcon>
          <Group />
        </ListItemIcon>
        <ListItemText primary="Manage Users" />
      </ListItem>
      <ListItem button component={Link} to="/manage-employees">
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Manage Employees" />
      </ListItem>
    </List>
  </Drawer>
);

const Dashboard = () => (
  <Box p={3}>
    <Typography variant="h4" gutterBottom>Dashboard</Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6">Total Users</Typography>
          <Typography variant="h3">
            <CountUp end={totalUsers} duration={2.5} />
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6">Active Users</Typography>
          <Typography variant="h3">
            <CountUp end={activeUsers} duration={2.5} />
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6">Service Usage</Typography>
          {Object.keys(serviceUsage).map((service, index) => (
            <Typography key={index}>
              {service}: <CountUp end={serviceUsage[service]} duration={2.5} />
            </Typography>
          ))}
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

const ManageUser = () => {
  const [users, setUsers] = useState(initialUsers);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [newDialogOpen, setNewDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({ id: '', name: '', email: '' });

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setEditDialogOpen(true);
  };

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setDeleteDialogOpen(true);
  };

  const handleEditChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const handleNewChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleEditSave = () => {
    setUsers(users.map((user) => (user.id === selectedUser.id ? selectedUser : user)));
    setEditDialogOpen(false);
  };

  const handleNewSave = () => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewDialogOpen(false);
  };

  const handleDeleteConfirm = () => {
    setUsers(users.filter((user) => user.id !== selectedUser.id));
    setDeleteDialogOpen(false);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>Manage Users</Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>
                <IconButton color="primary" onClick={() => setNewDialogOpen(true)}>
                  <AddIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleEditClick(user)} style={{ marginRight: '10px' }}>Edit</Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDeleteClick(user)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit user details below:</DialogContentText>
          <TextField
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={selectedUser?.name || ''}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={selectedUser?.email || ''}
            onChange={handleEditChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)} color="primary">Cancel</Button>
          <Button onClick={handleEditSave} color="primary">Save</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Delete User</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this user?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)} color="primary">Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="secondary">Delete</Button>
        </DialogActions>
      </Dialog>

      {/* New User Dialog */}
      <Dialog open={newDialogOpen} onClose={() => setNewDialogOpen(false)}>
        <DialogTitle>New User</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter new user details below:</DialogContentText>
          <TextField
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={newUser.name}
            onChange={handleNewChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={newUser.email}
            onChange={handleNewChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setNewDialogOpen(false)} color="primary">Cancel</Button>
          <Button onClick={handleNewSave} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const ManageEmployees = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [newDialogOpen, setNewDialogOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [newEmployee, setNewEmployee] = useState({ id: '', name: '', position: '' });

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setEditDialogOpen(true);
  };

  const handleDeleteClick = (employee) => {
    setSelectedEmployee(employee);
    setDeleteDialogOpen(true);
  };

  const handleEditChange = (e) => {
    setSelectedEmployee({ ...selectedEmployee, [e.target.name]: e.target.value });
  };

  const handleNewChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleEditSave = () => {
    setEmployees(employees.map((employee) => (employee.id === selectedEmployee.id ? selectedEmployee : employee)));
    setEditDialogOpen(false);
  };

  const handleNewSave = () => {
    setEmployees([...employees, { ...newEmployee, id: employees.length + 1 }]);
    setNewDialogOpen(false);
  };

  const handleDeleteConfirm = () => {
    setEmployees(employees.filter((employee) => employee.id !== selectedEmployee.id));
    setDeleteDialogOpen(false);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>Manage Employees</Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>
                <IconButton color="primary" onClick={() => setNewDialogOpen(true)}>
                  <AddIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleEditClick(employee)} style={{ marginRight: '10px' }}>Edit</Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDeleteClick(employee)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Edit Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit employee details below:</DialogContentText>
          <TextField
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={selectedEmployee?.name || ''}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            name="position"
            label="Position"
            type="text"
            fullWidth
            value={selectedEmployee?.position || ''}
            onChange={handleEditChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)} color="primary">Cancel</Button>
          <Button onClick={handleEditSave} color="primary">Save</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Delete Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this employee?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)} color="primary">Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="secondary">Delete</Button>
        </DialogActions>
      </Dialog>

      {/* New Employee Dialog */}
      <Dialog open={newDialogOpen} onClose={() => setNewDialogOpen(false)}>
        <DialogTitle>New Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter new employee details below:</DialogContentText>
          <TextField
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={newEmployee.name}
            onChange={handleNewChange}
          />
          <TextField
            margin="dense"
            name="position"
            label="Position"
            type="text"
            fullWidth
            value={newEmployee.position}
            onChange={handleNewChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setNewDialogOpen(false)} color="primary">Cancel</Button>
          <Button onClick={handleNewSave} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const AdminDashboard = () => (
  <div style={{ display: 'flex' }}>
    <CssBaseline />
    <Sidebar />
    <div style={{ flex: 1 }}>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-users" element={<ManageUser />} />
        <Route path="/manage-employees" element={<ManageEmployees />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  </div>
);

export default AdminDashboard;
