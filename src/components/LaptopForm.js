import React, { useState } from 'react';
import { addLaptop } from '../api';

const LaptopForm = ({ onSave }) => {
  const [laptopData, setLaptopData] = useState({
    brand: '',
    model: '',
    serialNumber: '',
    purchaseDate: '',
    status: 'available',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const token = localStorage.getItem('token')

    console.log(token)
    const url = 'http://localhost:5000/laptops'
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
    }
    const res = await fetch(url, options)

    console.log(res)



    await addLaptop(laptopData);
    onSave(); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Brand"
        value={laptopData.brand}
        onChange={(e) => setLaptopData({ ...laptopData, brand: e.target.value })}
      />
      <input
        type="text"
        placeholder="Model"
        value={laptopData.model}
        onChange={(e) => setLaptopData({ ...laptopData, model: e.target.value })}
      />
      <input
        type="text"
        placeholder="Serial Number"
        value={laptopData.serialNumber}
        onChange={(e) => setLaptopData({ ...laptopData, serialNumber: e.target.value })}
      />
      <input
        type="date"
        placeholder="Purchase Date"
        value={laptopData.purchaseDate}
        onChange={(e) => setLaptopData({ ...laptopData, purchaseDate: e.target.value })}
      />
      <button type="submit">Add Laptop</button>
    </form>
  );
};

export default LaptopForm;
