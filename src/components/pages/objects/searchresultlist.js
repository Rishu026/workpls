import React, { useState } from "react";
import "./searchresultlist.css";
import { SearchResult } from "./searchlist";

export const SearchResultsList = ({ results, onSelect }) => { // Receive onSelect prop
  const uniqueIds = new Set();

  return (
    <div className="results-list">
      {results.map((result) => {
        if (!uniqueIds.has(result.id)) {
          uniqueIds.add(result.id);
          return (
            <div key={result.id} onClick={() => onSelect(result.name)}> {/* Call onSelect when an option is clicked */}
              <SearchResult result={result.name} />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};
