import React, { useState } from 'react';

const FileUpload = ({ onFileUpload, autofillForm }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of current index
  const [entries, setEntries] = useState([]); // State to store parsed entries from CSV file

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const content = event.target.result;
      const rows = content.trim().split('\n');
      // Parse CSV entries
      const parsedEntries = rows.slice(1).map(row => {
        const values = row.split(',');
        return {
          name: values[0].trim(),
          employeeId: values[1].trim(),
          gender: values[2].trim(),
          emailAddress: values[3].trim(),
          department: values[4].trim(),
          monthlySalary: values[5].trim()
        };
      });
      setEntries(parsedEntries);
      if (parsedEntries.length > 0) {
        autofillForm(parsedEntries[0]); // Autofill the form with the first entry
      }
    };

    reader.readAsText(file);
  };

  const handleNext = () => {
    if (currentIndex < entries.length - 1) {
      setCurrentIndex(currentIndex + 1);
      autofillForm(entries[currentIndex + 1]);
    }
  };

  return (
    <div>
      <h3>Upload CSV File</h3>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default FileUpload;
