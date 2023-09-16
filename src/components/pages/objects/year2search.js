import React, { useState } from "react";


const Searchyear2 = ({ onYearChange }) => {
  
  const [year, setYear] = useState(""); // State to store the entered year
 
  const handleYearChange = (event) => {
    const yearValue = event.target.value;
    setYear(yearValue);
    onYearChange(yearValue); // Notify the parent component
  };

  return (
    <div>
      <input
        type="number"
        placeholder="end year"
        value={year}
        onChange={handleYearChange}
      />
    </div>
  );
};

export default Searchyear2;