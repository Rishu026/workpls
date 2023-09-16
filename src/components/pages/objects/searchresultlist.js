import React, { useState } from "react";
import "./searchresultlist.css";
import { SearchResult } from "./searchlist";

export const SearchResultsList = ({ results }) => {
  const uniqueIds = new Set(); // Use a Set to store unique ids
  console.log(results);
  
  return (
    <div className="results-list">
      {results.map((result) => {
        // Check if the id is unique; if not, skip rendering
        if (!uniqueIds.has(result.id)) {
          uniqueIds.add(result.id); // Add the id to the Set to mark it as seen
          return (
            <div key={result.id}>
              <SearchResult result={result.name} />
            </div>
          );
        }
        return null; // Skip rendering if the id is not unique
      })}
    </div>
  );
};
