import React from 'react';
import './Details.css';

const Details = () => {
  // Sample employee data
  const employeeData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    designation: 'Software Engineer',
    age: '30',
    gender: 'Male',
    address: '123 Main Street, City',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  return (
    <div className="details-container">
      <h2 className="details-heading">Employee Details</h2>
      <div className="details-content">
        <div className="detail-item">
          <strong className="detail-label">Name:</strong> {employeeData.name}
        </div>
        <div className="detail-item">
          <strong className="detail-label">Email:</strong> {employeeData.email}
        </div>
        <div className="detail-item">
          <strong className="detail-label">Designation:</strong> {employeeData.designation}
        </div>
        <div className="detail-item">
          <strong className="detail-label">Age:</strong> {employeeData.age}
        </div>
        <div className="detail-item">
          <strong className="detail-label">Gender:</strong> {employeeData.gender}
        </div>
        <div className="detail-item">
          <strong className="detail-label">Address:</strong> {employeeData.address}
        </div>
        <div className="detail-item">
          <strong className="detail-label">Description:</strong> {employeeData.description}
        </div>
      </div>
    </div>
  );
};

export default Details;
