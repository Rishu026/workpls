import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Searchyear from "./yearsearch";

import "./searchbar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [year, setYear] = useState(""); // State to store the selected year

  const fetchData = () => {
    //const url = `http://localhost:7000/?year=${year}`;
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((item) => {
          return (
            input &&
            item &&
            item.name &&
            item.name.toLowerCase().includes(input)
          );
        });
        setResults(results);
      });
  };

  const handleYearChange = (selectedYear) => {
    setYear(selectedYear); // Update the selected year state
    fetchData(); // Fetch data with the selected year and input
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(); // Fetch data with the updated input
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type park name (in lowercase)..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Searchyear onYearChange={handleYearChange} /> {/* Pass the callback function */}
    </div>
  );
};
