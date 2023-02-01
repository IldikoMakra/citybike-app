import React from "react";

function Home() {
  return (
    <div className="container">
      <div className="card w-75 mt-2 mx-auto shadow p-3">
        <img
          src="https://www.citybikefinland.fi/sites/citybike/files/images/slider_home/smoovehki-30.jpg"
          class="card-img-top"
          alt="bike-images"
        ></img>
        <div className="card-body"></div>

        <h6>Welcome</h6>
        <p>
          This is a UI for displaying data from different stations and journeys
          made with city bikes in the Helsinki Capital area in June 2021. The
          data and image of the landing page is owned by City Bike Finland.
        </p>
      </div>
    </div>
  );
}

export default Home;
