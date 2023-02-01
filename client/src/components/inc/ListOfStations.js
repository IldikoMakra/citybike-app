import React, { useState, useEffect } from "react";
import SingleStation from "./SingleStation";

function ListOfStations() {
  const [stations, setStations] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [selected, setSelected] = useState();

  useEffect(() => {
    const url = "http://localhost:8080/api/stations";
    const fetchData = async () => {
      try {
        if (!isSelected) {
          const response = await fetch(url);
          const json = await response.json();
          json.data.map((a) => console.log(a.name));
          setStations(json.data);
        } else {
          //fetch the single station data to render
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (station) => {
    setSelected(station);
    setIsSelected(true);
  };

  const listComponent = (
    <div className="list-group">
      {stations.map((station) => (
        <button
          onClick={() => {
            handleClick(station);
          }}
          className="list-group-item"
          key={station.id}
        >
          {station.name}
        </button>
      ))}
    </div>
  );

  const stationDataComponent = (
    <div>
      <SingleStation />
      <a href="/stations">Back to Stations</a>
    </div>
  );

  return isSelected ? stationDataComponent : listComponent;
}

export default ListOfStations;
