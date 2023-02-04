import React, { useState } from "react";
import SingleStation from "./SingleStation";

function ListOfStations({ stations }) {
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState("");

  return clicked ? (
    <SingleStation name={name} />
  ) : (
    <div className="mx-auto">
      <div className="list-group">
        {stations.map((station) => (
          <button
            className="list-group-item"
            key={station.id}
            onClick={() => {
              setClicked(true);
              setName(station.name);
            }}
          >
            {station.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ListOfStations;
