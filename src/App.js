import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import parks from "../src/Data/skateboard-parks.json"
import { Icon,divIcon,point } from "leaflet";
//import { useState, useEffect } from 'react';
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
  const [activePark, setActivePark] = React.useState(null);
  return(  
    <MapContainer center={[26.2006, 92.9376]} zoom={8}>
      {/* OPEN STREEN MAPS TILES */}
      
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}>
      {parks.info?.map(garden => (
        <Marker
          key={garden.properties.PARK_ID}
          position={[
            garden.geometry.coordinates[0],garden.geometry.coordinates[1]
          ]}
          onClick={()=>{
            setActivePark(garden);
          }}
          icon = {customIcon}
          >
          {activePark && (
          <Popup>
          position={[
            activePark.geometry.coordinates[0],
            activePark.geometry.coordinates[1]
          ]}
          onClose ={()=>{
            setActivePark(null);
          }}
          <div>
            <h2>
              "Name: "+activePark.info.NAME
            </h2>
            <p>"Description:" + activePark.info.DESCRIPTION </p>
          </div>
          </Popup>
          )} 
           
        </Marker>
      ))}
      </MarkerClusterGroup>
     
    </MapContainer>
  
  );
}