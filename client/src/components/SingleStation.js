import React, { useState, useEffect } from "react";

function SingleStation({ name }) {
  const [stationData, setStationData] = useState({});

  useEffect(() => {
    const url = "http://localhost:8080/api/stations/" + name;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setStationData(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="card w-100 mx-auto shadow p-3 mt-5 bg-body-tertiary rounded">
      <div className="card-body">
        <h3>{name} Station Details</h3>
        <div className="container mt-4">
          <div className="row pb-2">
            <div className="col">Station Name</div>
            <div className="col" data-cy="stationName">
              {stationData.name}
            </div>
          </div>
          <div className="row pb-2">
            <div className="col">Station Address</div>
            <div className="col">{stationData.address}</div>
          </div>
          <div className="row pb-2">
            <div className="col">All Journeys Started Here</div>
            <div className="col">{stationData.departures}</div>
          </div>
          <div className="row">
            <div className="col">All Journeys Ended Here</div>
            <div className="col">{stationData.returns}</div>
          </div>
        </div>
      </div>
      <a href="/stations">Back to Stations</a>
    </div>
  );
}

export default SingleStation;
