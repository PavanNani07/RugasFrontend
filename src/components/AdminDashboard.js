import React, { useState, useEffect } from 'react';
import { getLaptops } from '../api';

const AdminDashboard = () => {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    const fetchLaptops = async () => {
      const response = await getLaptops();
      setLaptops(response.data);
    };
    fetchLaptops();
  }, []);

  const availableLaptops = laptops.filter(laptop => laptop.status === 'available').length;
  const assignedLaptops = laptops.filter(laptop => laptop.status === 'assigned').length;
  const maintenanceLaptops = laptops.filter(laptop => laptop.status === 'maintenance').length;

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Total Laptops: {laptops.length}</h3>
        <h3>Assigned Laptops: {assignedLaptops}</h3>
        <h3>Available Laptops: {availableLaptops}</h3>
        <h3>Laptops Under Maintenance: {maintenanceLaptops}</h3>
      </div>
    </div>
  );
};

export default AdminDashboard;
