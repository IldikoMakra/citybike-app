import React, { useState, useEffect } from "react";

function ListOfStations() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8080/api/stations";
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
    <div>
      <ul>
        {stations.map((station) => (
          <li key={station.id}>{station.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfStations;
