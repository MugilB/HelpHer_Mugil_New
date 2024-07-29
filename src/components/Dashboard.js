import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';

const Dashboard = () => {
  // Mock data
  const totalUsers = 1500;
  const activeUsers = 800;
  const serviceUsage = {
    service1: 400,
    service2: 300,
    service3: 100,
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="h3">{totalUsers}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Active Users</Typography>
            <Typography variant="h3">{activeUsers}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Service Usage</Typography>
            {Object.keys(serviceUsage).map((service, index) => (
              <Typography key={index}>
                {service}: {serviceUsage[service]}
              </Typography>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
