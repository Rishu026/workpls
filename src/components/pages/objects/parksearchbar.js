import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Searchyear1 from "./year1search.js";
import Searchyear2 from "./year2search.js";
import { components } from 'react-select';
import Select from 'react-select';
import "./searchbar.css";

export const SearchBar = ({ setResults }) => {
  const [options, setOptions] = useState([]); // Initialize as an empty array
  const [year1, setYear1] = useState("");
  const [year2, setYear2] = useState("");
  const [fetchOnButtonClick, setFetchOnButtonClick] = useState(false);

  const fetchData = () => {
    const url = `http://localhost:7000/?start_year=${year1}&end_year=${year2}`;
    
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const arr = json.map((item) => ({ value: item.name, label: item.name,latitude:item.coordinates.latitude,longitude:item.coordinates.longitude }));
        setOptions(arr); // Update options with fetched data
        setResults(arr); // You can set results with the same data if needed
        console.log(arr);
      });
  };

  const handleYearChange1 = (inputYear1) => {
    setYear1(inputYear1);
  };
  const handleYearChange2 = (inputYear2) => {
    setYear2(inputYear2);
  };

  const handleFetchButtonClick = () => {
    setFetchOnButtonClick(true);
    fetchData();
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" size="23" />
      <div>
        <Select
          className="input-cont"
          placeholder="Select a location"
          options={options} // Use the options state here
        />
      </div>
      <div className="year-input">
        <Searchyear1 onYearChange={handleYearChange1} />
      </div>
      <div className="year-input">
        <Searchyear2 onYearChange={handleYearChange2} />
      </div>
      <button className="button" onClick={handleFetchButtonClick}>
        Select years
      </button>
    </div>
  );
};
