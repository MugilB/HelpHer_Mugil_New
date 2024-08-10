import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getUsers = () => axios.get(`/login`);
export const addUser = (user) => axios.post(`${API_URL}/users`, user);
export const updateUser = (id, user) => axios.put(`${API_URL}/users/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);

export const getEmployees = () => axios.get(`${API_URL}/employees`);
export const addEmployee = (employee) => axios.post(`${API_URL}/employees`, employee);
export const updateEmployee = (id, employee) => axios.put(`${API_URL}/employees/${id}`, employee);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/employees/${id}`);
