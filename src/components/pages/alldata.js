import React, { useState } from "react";
import { SearchBar } from "./objects/parksearchbar";
import { SearchResultsList } from "./objects/searchresultlist";
import { Mapcomponent } from "./objects/mapcomponent";
import "./styles.css";
import LineChart from "./objects/chart";

function Alld() {
  const [results, setResults] = useState([]);
  const [selectedOption, setSelectedOption] = useState(""); // Add this state variable

  const handleOptionSelect = (option) => {
    // When an option is selected, update the state with the selected option
    setSelectedOption(option);
  };

  return (
    <div className='bg-cover flex-row bg-zinc-100 bg-origin-border '>
      <div className="search-bar-container ">
        <SearchBar setResults={setResults} selectedOption={selectedOption} /> {/* Pass selectedOption */}
        {results && results.length > 0 && <SearchResultsList results={results} onSelect={handleOptionSelect} />} {/* Pass onSelect function */}
      </div>

      <div className="map ">
        <Mapcomponent results={results} />
      </div>
      <div className="chart-container">
        {results && results.length === 1 && <LineChart result={results} />}
      </div>
    </div>
  );
}

export default Alld;
