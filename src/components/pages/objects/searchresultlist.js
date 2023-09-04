import React from "react";
import "./searchresultlist.css";
import { SearchResult } from "./searchlist";
//import { Line } from "react-chartjs-2";
//import LineChart from "./chart";
//import {Mapcomponent} from "./mapcomponent";


export const SearchResultsList = ({ results }) => {
  console.log(results);
  return (
    <div className="results-list">
      {results.map((result, id) => (
        <div key={id}>
          
          <SearchResult result={result.name} />
          
          
        </div>
      ))} 
    </div>
  );
};
