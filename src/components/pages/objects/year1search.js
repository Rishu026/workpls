import React, { useState } from "react";


const Searchyear1 = ({ onYearChange }) => {
  
  const [year, setYear] = useState(""); // State to store the entered year
  if (setYear =="") {
    console.log("Please select a year before fetching data.");
    return; // Exit the function if no year is selected
  }
  const handleYearChange = (event) => {
    const yearValue = event.target.value;
    setYear(yearValue);
    onYearChange(yearValue); // Notify the parent component
  };

  return (
    <div>
      <input
        type="number"
        placeholder="year ex(2020)"
        value={year}
        onChange={handleYearChange}
      />
    </div>
  );
};

export default Searchyear1;