import React, { useState } from "react";
import { SearchBar } from "./objects/parksearchbar";
import { SearchResultsList } from "./objects/searchresultlist";
import { Mapcomponent } from "./objects/mapcomponent";
import "./styles.css"
import LineChart from "./objects/chart";



function Alld() {
  const [results, setResults] = useState([]);

  return (
    <div className="Alld">
        <div className="search-bar-container">
        <SearchBar setResults={setResults}  /> 
        {results && results.length > 0 && <SearchResultsList results={results} />}   
        </div>  

        <div className="map">
        <Mapcomponent results = {results} /> 
        </div>
        
      <div className="chart-container">
      {results && results.length <=1 && <LineChart result ={results}/>}
      </div>
    </div>
  );
}

export default Alld;