import React, { useEffect, useState } from 'react';
import DataTable from './objects/metadtable';

const Metadata = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an API request using fetch
    fetch('https://jsonplaceholder.typicode.com/users ')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Assuming the API response is an array of objects
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Data Table</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <DataTable data={data} />
      )}
    </div>
  );
}

export default Metadata;
