import React, { useState, useEffect } from "react";
import ListOfJourneys from "../ListOfJourneys";

function Journeys() {
  const [journeys, setJourneys] = useState([]);

  useEffect(() => {
    const url = "http://86.50.228.198/api/journeys";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        json.data.map((a) => console.log(a.started));
        setJourneys(json.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">All Journeys in June 2021</h2>
      <ListOfJourneys journeys={journeys} />
    </div>
  );
}

export default Journeys;
