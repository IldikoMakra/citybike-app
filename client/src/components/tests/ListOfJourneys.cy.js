import React from "react";
import ListOfJourneys from "../ListOfJourneys";

describe("<ListOfJourneys />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ListOfJourneys />);
  });
});
