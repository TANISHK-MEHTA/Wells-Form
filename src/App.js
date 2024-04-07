// App.js
import React, { useState } from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import Form from './components/Form';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    employeeId: '',
    gender: '',
    emailAddress: '',
    department: '',
    monthlySalary: ''
  });
  const [employees, setEmployees] = useState([]);

  const handleFileUpload = (entries) => {
    setEmployees(entries);
    if (entries.length > 0) {
      autofillForm(entries[0]); // Autofill the form with the first entry
    }
  };

  const handleFormSubmit = (data) => {
    setEmployees([...employees, data]);
    setFormData({
      name: '',
      employeeId: '',
      gender: '',
      emailAddress: '',
      department: '',
      monthlySalary: ''
    });
  };

  const autofillForm = (entry) => {
    setFormData(entry);
  };

  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <Form formData={formData} onSubmit={handleFormSubmit} />
      <FileUpload onFileUpload={handleFileUpload} autofillForm={autofillForm} />
      <h2>Employee Entries</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            Name: {employee.name}, Employee ID: {employee.employeeId}, Gender: {employee.gender}, Email: {employee.emailAddress}, Department: {employee.department}, Salary: {employee.monthlySalary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
