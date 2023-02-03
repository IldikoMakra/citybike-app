import React, { useState } from "react";
import SingleStation from "./SingleStation";

function ListOfStations({ stations }) {
  const [isSelected, setIsSelected] = useState(false);
  const [selected, setSelected] = useState();

  const handleClick = (station) => {
    setSelected(station);
    setIsSelected(true);
  };

  const listComponent = (
    <div className="mx-auto">
      <div className="list-group">
        {stations.map((station) => (
          <button
            data-cy="list-button"
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
    </div>
  );

  return isSelected ? <SingleStation name={selected.name} /> : listComponent;
}

export default ListOfStations;
