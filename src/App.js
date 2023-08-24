import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import { useState, useEffect } from 'react';
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Nav from "../src/components/Navbar"
import Alld from "../src/pages/alldata"

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [38, 38] // size of the icon
});

const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span className="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

const App = () => {
  const [activeParkS, setActiveParkS] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api');

      
      if (response.ok) {
        
        const data = await response.json();
        console.log(response)
        const results = data.results; // Extract the array of users
        setActiveParkS(results);
      } else {
        console.error('API request failed with status:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      
      <Nav>
        <ul>
          <Link to="/alldata">
            All Data
          </Link>
        </ul> 
      </Nav>


      
      <>
        <MapContainer center={[26.2006, 92.9376]} zoom={8} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
            {activeParkS?.map((garden, index) => (
              <Marker
                key={index}
                position={[parseFloat(garden.location.coordinates.latitude), parseFloat(garden.location.coordinates.longitude)]}
                icon={customIcon}
              >
                <Popup>
                  <div>
                    <h3>Yes</h3>
                    <p>State: {garden.location.country}</p>
                    <p>City: {garden.location.city}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
        <Routes>
        <Route path ="/alldata"element= {<Alld/>} />
      </Routes>
      </>
    </div>
  );
};

export default App;
