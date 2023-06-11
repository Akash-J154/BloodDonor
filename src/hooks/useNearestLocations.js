import { useEffect, useState } from "react";

const useNearestLocations = (locations, selectedLocationLat,selectedLocationLon) => {
  const [nearestLocations, setNearestLocations] = useState([]);
  console.log(locations)
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
   
    const radlat1 = (Math.PI * lat1) / 180;
    const radlon1 = (Math.PI * lon1) / 180;
    const radlat2 = (Math.PI * lat2) / 180;
    const radlon2 = (Math.PI * lon2) / 180;

    const dlon = radlon2 - radlon1;
    const dlat = radlat2 - radlat1;
    const a =
      Math.sin(dlat / 2) * Math.sin(dlat / 2) +
      Math.cos(radlat1) *
        Math.cos(radlat2) *
        Math.sin(dlon / 2) *
        Math.sin(dlon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = 6371 * c;

    return distance;

  };

  const filterLocations = () => {
    if (selectedLocationLon) {
    

      const filteredLocations = locations.filter((loc) => {
        const distance = calculateDistance(
        selectedLocationLat,
        selectedLocationLon,
          loc.lat,
          loc.lon
        );
      
        return distance <= 2;
      });

      setNearestLocations(filteredLocations);
    } else {
      setNearestLocations([]);
    }
  };

  useEffect(()=>{
    filterLocations()
  },[])
  return { nearestLocations };
};

export default useNearestLocations;
