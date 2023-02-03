import React from "react";

function ListOfStations({ stations }) {
  return (
    <div className="mx-auto">
      <div className="list-group">
        {stations.map((station) => (
          <a
            href={"/stations/" + station}
            className="list-group-item"
            key={station.id}
          >
            {station.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ListOfStations;
