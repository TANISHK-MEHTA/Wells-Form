import React, { useState, useEffect } from 'react';

const Form = ({ formData: initialFormData, onSubmit }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [manuallyModified, setManuallyModified] = useState(false);

  useEffect(() => {
    setFormData(initialFormData);
    setManuallyModified(false);
  }, [initialFormData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!manuallyModified) {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Employee ID:</label>
          <input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} />
        </div>
        <div>
          <label>Gender:</label>
          <div>
            <label>
              <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} /> Female
            </label>
          </div>
        </div>
        <div>
          <label>Email Address:</label>
          <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} />
        </div>
        <div>
          <label>Department:</label>
          <select name="department" value={formData.department} onChange={handleChange}>
            <option value="">Select Department</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="IT">IT</option>
          </select>
        </div>
        <div>
          <label>Monthly Salary:</label>
          <input type="text" name="monthlySalary" value={formData.monthlySalary} onChange={handleChange} />
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default Form;
