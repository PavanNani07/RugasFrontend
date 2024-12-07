import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Admin Dashboard</Link></li>
        <li><Link to="/employee">Employee Portal</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
