import React, { useState, useEffect } from "react";
import ListOfStations from "../ListOfStations";

function Stations() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const url = "http://86.50.228.198/api/stations";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        json.data.map((a) => console.log(a.name));
        setStations(json.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container mt-4">
      <h2 className="text-center">All Stations</h2>
      <h6 className="text-center">Click to see station details</h6>

      <ListOfStations stations={stations} />
    </div>
  );
}

export default Stations;
