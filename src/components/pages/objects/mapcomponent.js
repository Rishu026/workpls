import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";




export const Mapcomponent = ({results}) => {
    const customIcon = new Icon({
        iconUrl: require("./plant.png"),
        iconSize: [38, 38] // size of the icon
      });

  return (
    
    <MapContainer center={[26.2006, 92.9376]} zoom={6}  >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {results.map((result)=>(
            <Marker 
                key = {result.id}
                position={[parseFloat(result.coordinates.latitude), parseFloat(result.coordinates.longitude)]}
                icon = {customIcon}
            >
                 <Popup>
                  <div>
                    <h3>Yes</h3>
                    <p>username: {result.name}</p>
                    <p>City: {result.name}</p>
                  </div>
                </Popup>
            </Marker>
        ))}

    </MapContainer>
    
  )
}
