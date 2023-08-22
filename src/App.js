import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
//import { ChakraProvider } from '@chakra-ui/react'
//import parks from "../src/Data/skateboard-parks.json"
import { Icon,divIcon,point } from "leaflet";

import { useState, useEffect } from 'react';
//import React from "react";



// create custom icon
const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  //iconUrl: require(".public/logo192.png"),
  iconSize: [38, 38] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

// markers

export default function App() {
  const [activeParkS, setActiveParkS] = useState([]);

  

  useEffect(()=>{
    fetchGardens();
  },[]);

  const fetchGardens = async ()=>{
    const response = await fetch("http://localhost:3000/gardens");
    const data = await response.json();
    setActiveParkS(data);
  };

 

 
  return(  
    <div class= "left">
    <h2>Output of the data
      
    </h2>
      
    <div class= "">
    <MapContainer center={[26.2006, 92.9376]} zoom={8}>
      {/* OPEN STREEN MAPS TILES */}
      
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}>
      {activeParkS?.map((garden) => (
        <Marker
          key={garden.garden_name}
          position={[
            garden.latitude,garden.longitude
          ]}    
          icon = {customIcon}
          >
          <Popup
          position={[
            garden.latitude,
            garden.longitude
          ]}
          >
        
          <div>
            <h3>
              "Name: "+ {garden.garden_name}
            </h3>
            <p>"State" + {garden.state} </p>
            <p>"Size of garden is: " + {garden.sizeofGarden}</p>

          </div>
          </Popup>
           
           
        </Marker>
      ))}
      </MarkerClusterGroup>
     
    </MapContainer>
    </div>
    </div>
  );
}