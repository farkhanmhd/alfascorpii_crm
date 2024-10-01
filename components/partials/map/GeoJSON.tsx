import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import L, { divIcon } from "leaflet";
import seg from "./seg.json";
import ecomp from "./ecomp.json";
const GeoJSONMap = () => {
  const position = [37.5004851, -96.2261503];
  const setColor = ({ properties }) => {
    return { weight: 1 };
  };

  const customMarkerIcon = (name) =>
    divIcon({
      html: name,
      className: "icon",
    });
  const setIcon = ({ properties }, latlng) => {
    return L.marker(latlng, { icon: customMarkerIcon(properties.Name) });
  };
  return (
    <div className="w-full h-[300px]">
      <MapContainer
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={seg} />
        <GeoJSON data={ecomp} />
      </MapContainer>
    </div>
  );
};

export default GeoJSONMap;
