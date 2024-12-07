import React, { useState, useEffect } from 'react';
import { getLaptops, updateLaptop, deleteLaptop } from '../api';
import LaptopForm from './LaptopForm';
import './LaptopManagement.css'; // Import CSS for additional styles

const LaptopManagement = () => {
  const [laptops, setLaptops] = useState([]);
  const [editingLaptopId, setEditingLaptopId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('');

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await getLaptops();
        setLaptops(response.data);
      } catch (error) {
        console.error('Error fetching laptops:', error);
      }
    };
    fetchLaptops();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteLaptop(id);
      setLaptops(laptops.filter((laptop) => laptop._id !== id));
    } catch (error) {
      console.error('Error deleting laptop:', error);
    }
  };

  const handleEdit = (id, currentStatus) => {
    setEditingLaptopId(id);
    setSelectedStatus(currentStatus);
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleUpdate = async () => {
    try {
      const updatedLaptop = await updateLaptop(editingLaptopId, { status: selectedStatus });
      setLaptops(
        laptops.map((laptop) =>
          laptop._id === editingLaptopId ? { ...laptop, status: updatedLaptop.data.status } : laptop
        )
      );
      setEditingLaptopId(null); // Reset editing state
      setSelectedStatus('');
    } catch (error) {
      console.error('Error updating laptop status:', error);
    }
  };

  return (
    <div className="laptop-management-container">
      <h2 className="heading">Laptop Management</h2>
      <LaptopForm onSave={() => setLaptops([...laptops])} />
      <h3 className="subheading">Laptop List</h3>
      <ul className="laptop-list">
        {laptops.map((laptop) => (
          <li key={laptop._id} className="laptop-item">
            <span className="laptop-info">
              <strong>{laptop.brand}</strong> - {laptop.model} - <span className={`status ${laptop.status}`}>{laptop.status}</span>
            </span>
            <div className="actions">
              <button className="delete-btn" onClick={() => handleDelete(laptop._id)}>
                Delete
              </button>
              <button className="update-btn" onClick={() => handleEdit(laptop._id, laptop.status)}>
                Update Status
              </button>
              {editingLaptopId === laptop._id && (
                <div className="status-update">
                  <select className="status-dropdown" value={selectedStatus} onChange={handleStatusChange}>
                    <option value="available">Available</option>
                    <option value="assigned">Assigned</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                  <button className="ok-btn" onClick={handleUpdate}>
                    OK
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LaptopManagement;
