describe("Home BGstore", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Displays new arrival", () => {
    cy.get(".collection-list")
      .children()
      .should("have.length", 8)
      .children()
      .get(".collection-list > :nth-child(1)")
      .should("contain.html", "img")
      .and("contain.html", "text");
  });

  it("Testing navbar", () => {
    cy.get('[href="/#new"] > .nav-link')
      .click()
      .url()
      .should("include", "/#new");
    cy.get('[href="/#aboutUs"] > .nav-link')
      .click()
      .url()
      .should("include", "/#aboutUs");
  });

  it("Testing products and details", () => {
    cy.get(":nth-child(4) > .nav-link").click();
    cy.get("#product-list")
      .children()
      .should("have.length", 20)
      .children()
      .get("#product-list > :nth-child(1)")
      .should("contain.html", "img")
      .and("contain.html", "text");
    cy.get('[value="Pants"]').click({ force: true });
    cy.get("#product-list").children().should("have.length", 3);
    cy.get(":nth-child(1) > .product-item > .row > .btn-danger").click();
    cy.get(".position-absolute").should("to.have.text", "1");
    cy.get('[value="Accesories"]').click();
    cy.get(":nth-child(3) > .product-item > .row > .btn-secondary").click();
    cy.get(".row > :nth-child(1)").should("contain.html", "img");
    cy.wait(1000);
    cy.get(".row > :nth-child(2) > .btn").click();
    cy.get(".position-absolute").should("to.have.text", "2").click();
    cy.get(".col-lg-8").children().should("have.length", 5);
    cy.get(
      ":nth-child(2) > :nth-child(1) > .col-md-7 > :nth-child(1) > :nth-child(2) > .pagination > :nth-child(3) > .page-link"
    ).click({ force: true });
    cy.get(
      ":nth-child(2) > :nth-child(1) > .col-md-7 > :nth-child(1) > :nth-child(2) > .pagination > :nth-child(2) > .page-link"
    ).should("to.have.text", "2");
    cy.get(
      ":nth-child(2) > :nth-child(1) > .col-md-7 > :nth-child(1) > :nth-child(2) > .pagination > :nth-child(1) > .page-link"
    ).click({ force: true });
    cy.get(
      ":nth-child(2) > :nth-child(1) > .col-md-7 > :nth-child(1) > :nth-child(2) > .pagination > :nth-child(2) > .page-link"
    ).should("to.have.text", "1");
    cy.get(
      ":nth-child(2) > :nth-child(1) > .col-md-7 > :nth-child(2) > .col-8 > p"
    ).click();
    cy.get(".col-lg-8").children().should("have.length", 3);
  });

  it("Register user", () => {
    cy.get('[href="/login"] > .btn')
      .click()
      .get(".text-center > a > .btn")
      .click();
    cy.get(":nth-child(1) > .form-control")
      .type("TEST", { force: true })
      .get(":nth-child(2) > .form-control")
      .type("TESTER")
      .get(":nth-child(3) > .form-control")
      .type("test@gmail.com")
      .get(":nth-child(4) > .form-control")
      .type("test@gmail.com");
    cy.get(":nth-child(5) > .form-control").type("123qweR%");
    cy.get(":nth-child(6) > .form-control").type("123qweR%");
    cy.get(".w-50").click();
    cy.get(".valid-feedback").should(
      "to.have.text",
      "User registered succesfully"
    );
  });

  it("Login user", () => {
    cy.get('[href="/login"] > .btn').click();
    cy.get("#exampleInputEmail1").type("juan@gmail.com");
    cy.get("#exampleInputPassword1").type("123qweR%");
    cy.get(".d-flex > .btn").click();
    cy.get('[href="/profile"] > .btn > .bi').should("be.visible");
  });
});
