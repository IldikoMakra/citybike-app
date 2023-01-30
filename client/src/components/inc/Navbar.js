import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand">
            Citybike App
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/stations" class="nav-link active">
                  Stations
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link to="/journeys" class="nav-link active">
                  Journeys
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
