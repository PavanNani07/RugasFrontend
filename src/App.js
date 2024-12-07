import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import EmployeePage from './pages/EmployeePage';
import { setAuthToken } from './api';
import IssueReportForm from './components/IssueReportForm';
import LaptopManagement from './components/LaptopManagement';

const App = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/employee" element={<EmployeePage />} />
        <Route path="/issues" element={<IssueReportForm />} />
        <Route path="/laptop-management" element={<LaptopManagement />} />
      </Routes>
    </Router>
  );
};

export default App;
