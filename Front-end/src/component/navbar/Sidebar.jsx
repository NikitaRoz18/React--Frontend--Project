import React from 'react';
import './Sidebar.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h3 className="logo"><a href='/'>LOGO</a></h3>
      <ul>
        <li onClick={() => navigate('/all/material/')}><i className="fas fa-chart-bar icon"></i>Dashboard</li>
        <li onClick={() => navigate('/all/material/')}><i className="fas fa-flask icon"></i>Raw material</li>
        <li onClick={() => navigate('/all/products/')}><i className="fas fa-cube icon"></i>Product</li>
        <li onClick={() => navigate('/all/process/')}><i className="fas fa-cogs icon"></i>Process</li>
        <li onClick={() => navigate('/all/machine/')}><i className="fas fa-hard-drive icon"></i>Machine</li>
        <li onClick={() => navigate('/all/material/')}><i className="fas fa-user icon"></i>User</li>
      </ul>
    </div>
  );
}

export default Sidebar;
