import React from "react";
import ListOfStations from "../ListOfStations";

function Stations() {
  return (
    <div className="container">
      <h2 className="text-center">All Stations</h2>
      <h6 className="text-center">Click to see station details</h6>

      <ListOfStations />
    </div>
  );
}

export default Stations;
