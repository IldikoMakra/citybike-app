import React from "react";
import SingleStation from "../SingleStation";
import singleStation from "../../data/singleStation.json";

describe("Test data feching for one single station", () => {
  beforeEach(() => {
    cy.mount(<SingleStation name={singleStation} />);
  });

  it("check if data loaded", () => {
    cy.get("[data-cy=stationName]").should("have.text", singleStation);
  });

  it("check if return link at the bottom works", () => {});
});
