import React, { useState } from 'react';
import { assignLaptopToEmployee } from '../api';
import './EmployeeRequestForm.css'
const EmployeeRequestForm = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [laptopId, setLaptopId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await assignLaptopToEmployee({ employeeId, laptopId });
    setEmployeeId('');
    setLaptopId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Laptop ID"
        value={laptopId}
        onChange={(e) => setLaptopId(e.target.value)}
      />
      <button type="submit">Request Laptop</button>
    </form>
  );
};

export default EmployeeRequestForm;
