import React, { useState, useEffect } from 'react';
import './List.css';
import { Link } from 'react-router-dom';

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

  const handleEdit = (id) => {
    console.log('Edit employee:', id);
    // Handle edit logic here
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
  
  

  const handleView = (id) => {
    console.log('View employee:', id);
    // Handle view logic here
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
                <button className="view-button" > <Link className='editLink' to={`/details/${employee.id}`}>View</Link> </button>
                <button className="edit-button" ><Link className='editLink' to={`/edit/${employee.id}`}>Edit</Link> </button>
                <button className="delete-button" onClick={(e) => handleDelete(e, employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;