describe("Logged user actions tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('[href="/login"] > .btn').click();
    cy.get("#exampleInputEmail1").type("james@gmail.com");
    cy.get("#exampleInputPassword1").type("123qweR%");
    cy.get(".d-flex > .btn").click();
  });

  it("Profile", () => {
    cy.get('[href="/profile"] > .btn > .bi').click();
    cy.get(".left").should("contain.html", "img");
    cy.get(".info > :nth-child(1) > .bi").click();
    cy.get(":nth-child(4) > :nth-child(2) > .form-control").type("99999997");
    cy.get(".d-flex > .btn").click();
    cy.get(":nth-child(4) > :nth-child(2) > p").should(
      "to.have.text",
      "99999997"
    );
  });

  it("Purchase history", () => {
    cy.get('[href="/list"] > .btn > .bi').click();
    cy.get("tbody").children().should("have.length", 2);
    cy.get(":nth-child(1) > :nth-child(5) > .btn").click();
    cy.get(".col-md-12").children().should("have.length", 5);
  });

  it("Login", () => {
    cy.get(":nth-child(4) > .bi").click();
    cy.get('[href="/login"] > .btn').should("be.visible");
  });
});
