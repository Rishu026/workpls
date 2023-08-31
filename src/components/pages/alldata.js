import React, { useState } from "react";
import { SearchBar } from "./objects/list";
import { SearchResultsList } from "./objects/searchresultlist";
import { Mapcomponent } from "./objects/mapcomponent";
import "./styles.css"
import LineChart from "./objects/chart";


function Alld() {
  const [results, setResults] = useState([]);

  return (
    <div className="Alld">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        
        {results && results.length > 0 && <SearchResultsList results={results} />}
        <Mapcomponent results = {results} /> 
        <LineChart/>
      </div>
    </div>
  );
}

export default Alld;