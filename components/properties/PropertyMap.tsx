"use client";
import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  ZoomControl,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIc from "leaflet/dist/images/marker-icon-2x.png";
import { icon } from "leaflet";
import { FaLocationDot } from "react-icons/fa6";
import { findCountryByCode, findCountryLocation } from "@/lib/countries";
const iconUrl =
  "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";

const markerIcon = icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
});
function PropertyMap({ countryCode }: { countryCode: string }) {
  const defaultLocation = [51.505, -0.09] as [number, number];
  const location = findCountryLocation(countryCode)?.location as [
    number,
    number
  ];
  console.log(location);
  return (
    <MapContainer
      scrollWheelZoom={false}
      zoomControl={false}
      center={location || defaultLocation}
      zoom={5}
      className="h-[50vh] rounded-lg relative"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="bottomright" />
      <Marker position={location || defaultLocation} icon={markerIcon} />
    </MapContainer>
  );
}

export default PropertyMap;
