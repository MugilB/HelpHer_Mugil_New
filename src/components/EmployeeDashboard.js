import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const EmployeeDashboard = ({ serviceName, apiEndpoints }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders on component mount
        const fetchOrders = async () => {
            try {
                const response = await axios.get(apiEndpoints.fetchOrders);
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, [apiEndpoints.fetchOrders]);

    const handleAccept = async (orderId) => {
        try {
            await axios.patch(apiEndpoints.acceptOrder.replace(':id', orderId));
            setOrders(orders.map(order => 
                order.id === orderId ? { ...order, status: 'Accepted' } : order
            ));
        } catch (error) {
            console.error('Error accepting order:', error);
        }
    };

    const handleReject = async (orderId) => {
        try {
            await axios.patch(apiEndpoints.rejectOrder.replace(':id', orderId));
            setOrders(orders.map(order => 
                order.id === orderId ? { ...order, status: 'Rejected' } : order
            ));
        } catch (error) {
            console.error('Error rejecting order:', error);
        }
    };

    return (
        <div>
            <h1>{serviceName} Dashboard</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Order ID</TableCell>
                            <TableCell>Details</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map(order => (
                            <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.details}</TableCell>
                                <TableCell>{order.status}</TableCell>
                                <TableCell>
                                    {order.status === 'Pending' && (
                                        <>
                                            <Button
                                                onClick={() => handleAccept(order.id)}
                                                color="primary"
                                                variant="contained"
                                            >
                                                Accept
                                            </Button>
                                            <Button
                                                onClick={() => handleReject(order.id)}
                                                color="secondary"
                                                variant="contained"
                                                style={{ marginLeft: '10px' }}
                                            >
                                                Reject
                                            </Button>
                                        </>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default EmployeeDashboard;
