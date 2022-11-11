describe("change language option should change project language", () => {
  it("when change option from select option, should change", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(1000);

    // select language bangla
    cy.get(".sc-hHLeRK").select("bd");

    // compare
    cy.get(".sc-bBrHrO").contains("কায়নাত");
    cy.get('[href="/"] > .sc-cxabCf').contains("হোম");
  });
});
