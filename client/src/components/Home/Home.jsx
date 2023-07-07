import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div className="container">
      <h1 className="heading">Employee Management System</h1>
      <div className="content">
        <p className="description">Welcome to the Employee Management System. Manage your employees with ease!</p>
        <div className="options">
          <Link to="/form" className="option-link">
            <div className="option">
              <i className="fas fa-user-plus"></i>
              <span className="option-text">Add Employee</span>
            </div>
          </Link>
          <Link to="/list" className="option-link">
            <div className="option">
              <i className="fas fa-list-ul"></i>
              <span className="option-text">List Employees</span>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
