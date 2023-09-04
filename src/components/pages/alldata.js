import React, { useState } from "react";
import { SearchBar } from "./objects/parksearchbar";
import { SearchResultsList } from "./objects/searchresultlist";
import { Mapcomponent } from "./objects/mapcomponent";
import "./styles.css"
import { Line } from "react-chartjs-2";
import LineChart from "./objects/chart";



function Alld() {
  const [results, setResults] = useState([]);

  return (
    <div className="Alld">
      <div className="search-bar-container">
        <SearchBar setResults={setResults}  /> 
        {results && results.length > 0 && <SearchResultsList results={results} />}   
      </div>

      <div>
      <Mapcomponent results = {results} /> 
      </div>
      <div>
      {results && results.length <=1 && <LineChart result ={results}/>}
      </div>
    </div>
  );
}

export default Alld;