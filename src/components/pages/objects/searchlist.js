//import { Mapcomponent } from "./mapcomponent";
import "./searchresult.css";
import React from "react";

export const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result" 
      onClick={() => (result)}
    >
      {result}
      
    </div>
  );
};