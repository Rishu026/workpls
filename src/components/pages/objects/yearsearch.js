import React, { useState } from "react";

const Searchyear = ({ onSearch }) => {
  const [year, setYear] = useState(""); // State to store the entered year

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSearch = () => {
    // Call the onSearch callback function with the entered year
    onSearch(year);
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Enter a year"
        value2 ={year}
        onChange={handleYearChange}
      />
      <button onClick={handleSearch}>search</button>
    </div>
  );
};

export default Searchyear;
