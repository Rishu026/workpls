import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Searchyear1 from "./year1search.js";
import Searchyear2 from "./year2search.js";

import "./searchbar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [year1, setYear1] = useState(""); // State to store the selected year
  const[year2,setYear2] = useState("");
  const [fetchOnButtonClick, setFetchOnButtonClick] = useState(false);
  const fetchData = (value) => {
    const url = `http://localhost:7000/?start_year=${year1}&end_year=${year2}`;
    //const url = 'https://jsonplaceholder.typicode.com/users';

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

  const handleYearChange1 = (inputYear1) => {
    setYear1(inputYear1); // Update the selected year state
    //fetchData(inputYear1); // Fetch data with the selected year and input
  };
  const handleYearChange2 = (inputYear2) => {
    setYear2(inputYear2); // Update the selected year state
    //fetchData(inputYear2); // Fetch data with the selected year and input
  };

  const handleChange = (value) => {
    setInput(value);
    if(year1&&year2!==''){
    fetchData(value); // Fetch data with the updated input
    }
  };
  const handleFetchButtonClick = () => {
    setFetchOnButtonClick(true);
    fetchData();
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
        <Searchyear1 onYearChange={handleYearChange1} /> 
        
      </div>
      <div className="year-input">
        <Searchyear2 onYearChange={handleYearChange2} />
      </div>
      <button className="button" onClick={handleFetchButtonClick}>Select years</button>
      
      </div>
  );
};