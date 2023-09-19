import React from "react";
import "./searchresult.css";

export const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result" 
      onClick={() => alert(result)}
    >
      {result}
    </div>
  );
};
