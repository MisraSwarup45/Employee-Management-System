import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    email: '',
    designation: '',
    age: '',
    gender: '',
    address: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await fetch('http://localhost:3001/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employeeData),
    });
    setEmployeeData({
      name: '',
      email: '',
      designation: '',
      age: '',
      gender: '',
      address: '',
      description: '',
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Add Employee</h2>
      <form className="employee-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={employeeData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={employeeData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="designation">Designation</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={employeeData.designation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={employeeData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={employeeData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={employeeData.address}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={employeeData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
