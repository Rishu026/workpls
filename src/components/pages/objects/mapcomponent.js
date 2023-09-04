import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";



export const Mapcomponent = ({results}) => {
    const customIcon = new Icon({
        iconUrl: require("./plant.png"),
        iconSize: [38, 38] // size of the icon
      });

  return (
    <MapContainer center={[26.2006, 92.9376]} zoom={8} style={{ height: '400px', width: '40%',left: '750px', top:'350px',margin:'left',display:'flex'}}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {results.map((result)=>(
            <Marker 
                key = {result.id}
                position={[parseFloat(result.address.geo.lat), parseFloat(result.address.geo.lng)]}
                icon = {customIcon}
            >
                 <Popup>
                  <div>
                    <h3>Yes</h3>
                    <p>username: {result.name}</p>
                    <p>City: {result.id}</p>
                  </div>
                </Popup>
            </Marker>
        ))}

    </MapContainer>
  )
}
