import React from "react";
import { useState,useEffect } from "react";
const useFindLatitudeLongitude = (place)=>{


const [latitude, setLatitude] = useState(null);
const [longitude, setLongitude] = useState(null);
useEffect(()=>{ 
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${place}`)
.then((response) => response.json())
.then((data) => {
  if (data.length > 0) {
    const { lat, lon } = data[0];
    setLatitude(lat);
    setLongitude(lon);
  } 
})
.catch((error) => {
  console.error("Error:", error);
});},[place])

    
    return {latitude,longitude}
}
export default useFindLatitudeLongitude