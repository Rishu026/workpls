import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
//import { ChakraProvider } from '@chakra-ui/react'
//import parks from "../src/Data/skateboard-parks.json"
import { Icon,divIcon,point } from "leaflet";

import { useState, useEffect } from 'react';
import React from "react";



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
    fetch('https://get.geojs.io/v1/ip/geo.js')
    .then(response => response.json())
    .then(data => setActiveParkS(data));
  },[]);
  //console.log(parks.info.geometry.coordinates[0],parks.info.geometry.coordinates[1]);
  
  return(  
    <div class= "left">
    <h2>Output of the data
      
    </h2>
      
    <div class= "">
    <MapContainer center={[26.2006, 92.9376]} zoom={8} style={{ height: '500px', width: '100%'}}>
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
        
          //key={garden.ip}
          position={[
            garden.latitude,garden.longitude
          ]}    
          //icon = {Icon}
          >
          <Popup
          //position={[
            //garden.info.geometry.coordinates[0],garden.info.geometry.coordinates[1]
          //]}
          >
        
          <div>
            <h3>
              "Name: "+ {garden.NAME}
            </h3>
            <p>"State" + {garden.region} </p>
            <p>"City is: " + {garden.city}</p>

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