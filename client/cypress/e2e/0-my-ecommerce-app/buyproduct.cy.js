describe("Login end to end test", () => {
  it("when select products, add to cart, should be shown in total", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(1000);

    // open product page
    cy.get(".jHAiee > .sc-jOrMOR > a > .sc-cOFTSb").click();
    cy.wait(1000);

    // added one product to cart
    cy.get(
      ":nth-child(1) > .sc-gXmSlM > :nth-child(2) > a > .MuiSvgIcon-root"
    ).click();
    cy.wait(1000);
    cy.get(".sc-caXVBt").click();
    cy.wait(1000);
    cy.get(".MuiBadge-root > .MuiSvgIcon-root").click();
    cy.wait(1000);

    // Total
    cy.get(".epWDwH > .sc-brCFrO").contains("$50");
  });

  it("when added two products, should be shown in total", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(1000);

    // open product page
    cy.get(".jHAiee > .sc-jOrMOR > a > .sc-cOFTSb").click();
    cy.wait(1000);

    // added one product to cart
    cy.get(
      ":nth-child(1) > .sc-gXmSlM > :nth-child(2) > a > .MuiSvgIcon-root"
    ).click();
    cy.wait(1000);

    cy.get(".sc-caXVBt").click();
    cy.wait(1000);

    // Go to home again
    cy.get('[href="/"] > .sc-cxabCf').click();
    cy.wait(1000);

    // added one more product to cart
    cy.get(".jHAiee > .sc-jOrMOR > a > .sc-cOFTSb").click();
    cy.wait(1000);
    cy.get(":nth-child(3) > .sc-gXmSlM > :nth-child(2)").click();
    cy.get(".sc-caXVBt").click();

    cy.get(".MuiBadge-root > .MuiSvgIcon-root").click();
    cy.wait(1000);

    // Total
    cy.get(".epWDwH > .sc-brCFrO").contains("$250");

    // Checkout
    cy.get("span > .sc-gITdmR").click();
  });
});
