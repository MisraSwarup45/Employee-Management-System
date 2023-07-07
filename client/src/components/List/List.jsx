import React from 'react';
import './List.css';

const List = () => {
  // Sample employee data
  const employeeData = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      designation: 'Software Engineer',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      designation: 'UX Designer',
    },
    // Add more employee data as needed
  ];

  const handleEdit = (id) => {
    // Handle edit logic here
    console.log('Edit employee:', id);
  };

  const handleDelete = (id) => {
    // Handle delete logic here
    console.log('Delete employee:', id);
  };

  const handleView = (id) => {
    // Handle view logic here
    console.log('View employee:', id);
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
                <button className="view-button" onClick={() => handleView(employee.id)}>View</button>
                <button className="edit-button" onClick={() => handleEdit(employee.id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
