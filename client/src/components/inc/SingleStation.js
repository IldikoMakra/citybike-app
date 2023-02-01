import React, { useState, useEffect } from "react";

function SingleStation(props) {
  return (
    <div className="card w-50 mx-auto shadow p-3 mt-5 bg-body-tertiary rounded">
      <div className="card-body">
        <h3>Station Details</h3>
        <div className="container mt-4">
          <div className="row pb-2">
            <div className="col">Station Name</div>
            <div className="col">fetch data</div>
          </div>
          <div className="row pb-2">
            <div className="col">Station Address</div>
            <div className="col">fetch data</div>
          </div>
          <div className="row pb-2">
            <div className="col">All Journeys Started Here</div>
            <div className="col">fetch data</div>
          </div>
          <div className="row">
            <div className="col">All Journeys Ended Here</div>
            <div className="col">fetch data</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleStation;
