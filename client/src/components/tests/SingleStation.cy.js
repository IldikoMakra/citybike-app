import React from "react";
import SingleStation from "../SingleStation";

describe("<SingleStation />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SingleStation />);
  });
});
