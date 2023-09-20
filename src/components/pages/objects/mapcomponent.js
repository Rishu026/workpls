import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

export const Mapcomponent = ({ results }) => {
  const customIcon = new Icon({
    iconUrl: require("./plant.png"),
    iconSize: [38, 38] // size of the icon
  });

  // Check if results is an array and has at least one item before mapping
  if (!Array.isArray(results) || results.length === 0) {
    return (
      
        <MapContainer center={[26.2006, 92.9376]} zoom={6}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      </MapContainer>
      
    );
  }

  return (
    <MapContainer center={[26.2006, 92.9376]} zoom={6}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {results.map((result) => (
        <Marker
          key={result.id}
          position={[
            parseFloat(result.latitude),
            parseFloat(result.longitude)
          ]}
          icon={customIcon}
        >
          <Popup>
            <div>
              <h3>Yes</h3>
              <p>Name: {result.name}</p>
              <p>City: {result.id}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
