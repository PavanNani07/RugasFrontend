import React from 'react';
import EmployeeRequestForm from './EmployeeRequestForm';
import IssueReportForm from './IssueReportForm';

const EmployeeDashboard = () => {
  return (
    <div>
      <h2>Employee Dashboard</h2>
      <EmployeeRequestForm />
      <IssueReportForm />
    </div>
  );
};

export default EmployeeDashboard;