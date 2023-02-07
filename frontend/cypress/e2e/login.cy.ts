describe("test login page", () => {
  beforeEach(()=> {
    cy.visit("/");
  })

  it("should go to profile page", () => {
    cy.get("button").should("contain.text", "Login")
  })

  it("should login and go to profile page", ()=> {
   
    cy.contains("E-mail").type("test@email.com")
    cy.contains("Password").type("123")
    cy.contains("Login").click()
    cy.url().should("contain", "/profile/1")
    // cy.contains("Fatura Atual").then(($h3)=> {})
  })

  it("should go to sign in", () => {
    cy.contains("Cadastrar").click()
    cy.url().should("include", "/sign")
    cy.get("button:contains('Cadastrar')").should("exist")
  })
})

export {}