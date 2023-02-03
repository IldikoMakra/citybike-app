import React from "react";
import ListOfStations from "../ListOfStations";
import stations from "../../data/stations.json";

describe("Test stations list data feching ", () => {
  beforeEach(() => {
    const handleClickSpy = cy.spy().as("handleClickSpy");
    cy.mount(<ListOfStations list={stations} />);
  });

  it("check if data loaded", () => {
    cy.get("[data-cy=list-button]").should(exist);
  });

  it("check if click handler works", () => {
    cy.get("[data-cy=list-button]").click();
    cy.get("@handleClickSpy").should("have.been.called");
  });
});
