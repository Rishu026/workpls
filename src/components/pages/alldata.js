import { useState } from "react";

import "./styles.css";
import { SearchBar } from "./objects/list";
import { SearchResultsList } from "./objects/searchresultlist";

function Alld() {
  const [results, setResults] = useState([]);

  return (
    <div className="Alld">
      <div className="search-bar-container">
        <SearchBar className="search-input" setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default Alld;