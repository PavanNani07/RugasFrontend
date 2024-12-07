import React from 'react';
import AdminDashboard from '../components/AdminDashboard';
import LaptopManagement from '../components/LaptopManagement';

const AdminPage = () => {
  return (
    <div>
      <h1>Admin Page</h1>
      <AdminDashboard />
      <LaptopManagement />
    </div>
  );
};

export default AdminPage;
