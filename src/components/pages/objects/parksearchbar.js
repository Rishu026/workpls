import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchResult } from "./searchlist";
import Searchyear from "./yearsearch";

import "./searchbar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");


  const fetchData = (value,year) => {
      //const url = 'http://localhost:7000/?year=2000';
      const url = 'https://jsonplaceholder.typicode.com/users';
      fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type park name(in smallcase)..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
       
      />
     
    
      </div>
    
  );
};