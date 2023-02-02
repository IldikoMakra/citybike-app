import React from "react";
import Journeys from "../Journeys";

describe("<Journeys />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Journeys />);
  });
});
