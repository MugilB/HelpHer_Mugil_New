import React from 'react';
import EmployeeDashboard from './EmployeeDashboard';

const FemaleBikeRideDashboard = () => {
    const apiEndpoints = {
        fetchOrders: 'http://localhost:8080/api/female-bike-ride/orders',
        acceptOrder: 'http://localhost:8080/api/female-bike-ride/orders/:id/accept',
        rejectOrder: 'http://localhost:8080/api/female-bike-ride/orders/:id/reject'
    };

    return <EmployeeDashboard serviceName="Female Bike Ride" apiEndpoints={apiEndpoints} />;
};

export default FemaleBikeRideDashboard;
