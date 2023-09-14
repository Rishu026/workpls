import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Searchyear from "./yearsearch";

import "./searchbar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [year, setYear] = useState(""); // State to store the selected year

  const fetchData = (value) => {
    //const url = `http://localhost:7000/?year=${year}`;
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)  
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((item) => {
        
          return (
            value &&
            item &&
            item.name &&
            item.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
        console.log(results);
      });
  };

  const handleYearChange = (inputYear) => {
    setYear(inputYear); // Update the selected year state
    fetchData(); // Fetch data with the selected year and input
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value); // Fetch data with the updated input
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" size = '23' />
      <div>
      
      <input className="location-input"
      type="text"
      placeholder="Location name(lowercase)"
      value={input}
      onChange={(e) => handleChange(e.target.value)}
      />
     </div>
      
      <div className="year-input">
        <Searchyear onYearChange={handleYearChange} /> 
      </div>
     
      
      </div>
  );
};
