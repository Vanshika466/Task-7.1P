import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <header className="top-bar">
        <h1 className="main-title">Dev@Deakin</h1>
        <input type="text" placeholder="Search" className="search-input" />
        <div className="button-group">
          <button className="button-primary" onClick={() => navigate('/post')}>Post</button>
          <button className="button-secondary" onClick={() => navigate('/login')}>Login</button>
        </div>
      </header>
    </div>
  );
};

export default Home;
