import React from "react";
import ListOfStations from "../inc/ListOfStations";

function Stations() {
  return (
    <div className="container">
      <div className="card w-50 mt-4 mx-auto shadow p-3">
        <div className="card-body"></div>

        <ListOfStations />
      </div>
    </div>
  );
}

export default Stations;
