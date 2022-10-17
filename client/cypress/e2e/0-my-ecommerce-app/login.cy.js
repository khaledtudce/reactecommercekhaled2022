describe("something", () => {
  it("something", () => {
    // open the page
    cy.visit("http://localhost:3000/");
    cy.wait(1000);

    // click login
    cy.findByText(/login/i).click();
    cy.wait(1000);

    // type username and password
    cy.findByPlaceholderText(/username/i).type("khaledtudce");
    cy.wait(1000);
    cy.findByPlaceholderText(/password/i).type("123456");
    cy.wait(1000);

    // click on login button
    cy.findByRole("button", { name: /login/i }).click();
    cy.wait(1000);

    // compare if khaledtudce user exists
    cy.findByText(/khaledtudce/i).should("exist");
  });
});
