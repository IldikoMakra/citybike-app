import React from "react";
import ListOfStations from "../ListOfStations";

describe("<ListOfStations />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ListOfStations />);
  });
});
