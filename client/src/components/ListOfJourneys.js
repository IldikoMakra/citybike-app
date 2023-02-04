import React from "react";

function ListOfJourneys({ journeys }) {
  return (
    <div className="container">
      <div className="card w-100 mt-4 mx-auto shadow p-3">
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Started at</th>
                <th scope="col">Ended at</th>
                <th scope="col">Distance in Km</th>
                <th scope="col">Duration in Min</th>
              </tr>
            </thead>
            <tbody>
              {journeys.map((journey) => (
                <tr>
                  <td>{journey.started}</td>
                  <td>{journey.ended}</td>
                  <td>{journey.distanceKm}</td>
                  <td>{journey.durationMin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListOfJourneys;
