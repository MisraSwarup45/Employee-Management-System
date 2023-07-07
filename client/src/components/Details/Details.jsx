import React, {useState, useEffect} from 'react';
import './Details.css';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Details = () => {
  // Sample employee data
  const { id } = useParams();
  // const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState({
    name: '',
    email: '',
    designation: '',
    age: '',
    gender: '',
    address: '',
    description: '',
  });

  useEffect(() => {
    const Getuser = async () => {
      const apiUrl = `http://localhost:3001/create/${id}`;
      await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res) => res.json())
        .then((data) => { setEmployeeData(data[0]);})
        .catch((err) => { console.log(err); })
    }
    Getuser();
  }, [id]);


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
      <Footer />
    </div>
  );
};

export default Details;
