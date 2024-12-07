import React, { useState } from 'react';
import { reportIssue } from '../api';

const IssueReportForm = () => {
  const [issueData, setIssueData] = useState({
    laptopId: '',
    description: '',
    priority: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await reportIssue(issueData);
    setIssueData({ laptopId: '', description: '', priority: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Laptop ID"
        value={issueData.laptopId}
        onChange={(e) => setIssueData({ ...issueData, laptopId: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={issueData.description}
        onChange={(e) => setIssueData({ ...issueData, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Priority"
        value={issueData.priority}
        onChange={(e) => setIssueData({ ...issueData, priority: e.target.value })}
      />
      <button type="submit">Report Issue</button>
    </form>
  );
};

export default IssueReportForm;
