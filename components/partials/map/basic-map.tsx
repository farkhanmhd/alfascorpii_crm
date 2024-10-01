import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const BasicMap = () => {
  const position = [47.31322, -1.319482];
  return (
    <div className="w-full h-[300px]">
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div className="">
              A pretty CSS3 popup. <br /> Easily customizable.
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default BasicMap;
