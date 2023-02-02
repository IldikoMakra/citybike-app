import React from "react";
import Stations from "../Stations";

describe("<Stations />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Stations />);
  });
});
