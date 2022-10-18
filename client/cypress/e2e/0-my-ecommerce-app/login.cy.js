describe("Login end to end test", () => {
  it("when username and password provided, should be able to login", () => {
    // open the page
    cy.visit("http://localhost:3000/");
    cy.wait(1000);

    // click login
    cy.findByText(/login/i).click();
    cy.wait(1000);

    // type username and password
    cy.findByPlaceholderText(/usernamelogin/i).type("khaledreza");
    cy.wait(1000);
    cy.findByPlaceholderText(/passwordlogin/i).type("123456");
    cy.wait(1000);

    // click on login button
    cy.findByRole("button", { name: /login/i }).click();
    cy.wait(1000);

    // compare if khaledreza user exists
    cy.contains("khaledreza").should("exist");
  });

  it("register when user information provided, should be able to login", () => {
    // register
    cy.visit("http://localhost:3000/");
    cy.wait(1000);
    cy.findByText(/register/i).click();
    cy.wait(1000);
    cy.get('[placeholder="name"]').type("Khaled");
    cy.wait(1000);
    cy.get('[placeholder="lastname"]').type("Reza");
    cy.wait(1000);
    cy.get('[placeholder="username"]').type("khaledreza3");
    cy.wait(1000);
    cy.get('[placeholder="email"]').type("khaledreza3@gmail.com");
    cy.wait(1000);
    cy.get('[placeholder="password"]').type("123456");
    cy.wait(1000);
    cy.get('[placeholder="confirm password"]').type("123456");
    cy.wait(1000);
    cy.findByText(/Create Account/i).click();
    cy.wait(1000);

    // login
    cy.get('[placeholder="usernamelogin"]').type("khaledreza3");
    cy.wait(1000);
    cy.get('[placeholder="passwordlogin"]').type("123456");
    cy.wait(1000);
    cy.findByRole("button", { name: /login/i }).click();
    cy.wait(1000);

    // compare
    cy.findByText(/khaledreza3/i).should("exist");
  });
});
