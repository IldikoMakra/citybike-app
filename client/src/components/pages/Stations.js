import React from "react";
import ListOfStations from "../inc/ListOfStations";

function Stations() {
  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body"></div>
        <h2>Stations List</h2>
        <ListOfStations />
      </div>
    </div>
  );
}

export default Stations;
