import React, { useState, useEffect } from 'react';
import './List.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const List = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    getEmployeeData();
  }, []);

  const getEmployeeData = async () => {
    try {
      const response = await fetch('http://localhost:3001/create');
      const data = await response.json();
      setEmployeeData(data);
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };


  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/delete/${id}`, {
        method: 'DELETE',
      });
      if (response.status === 200) {
        console.log('Employee deleted successfully');
        getEmployeeData();
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div className="list-container">
      <h2 className="list-heading">Employee List</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th className="table-header">Name</th>
            <th className="table-header">Email</th>
            <th className="table-header">Designation</th>
            <th className="table-header">Options</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.designation}</td>
              <td className="options-buttons">
                <Link className='editLink' to={`/details/${employee.id}`}><button className="view-button" >View</button></Link>
                <Link className='editLink' to={`/edit/${employee.id}`}><button className="edit-button" >Edit</button></Link>
                <button className="delete-button" onClick={(e) => handleDelete(e, employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default List;