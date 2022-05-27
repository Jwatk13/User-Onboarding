describe("User Onboarding App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    })

    const firstNameInput = () => cy.get("input[name=firstName]");
    const lastNameInput = () => cy.get("input[name=lastName]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password]");
    const termsOfService = () => cy.get(`[type="checkbox"]`);
    const createUserButton = () => cy.get(`[type="submit"]`);

    it("sanity check making sure tests work", () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
    })

    it("The proper elements exist", () => {
        firstNameInput().should("exist");
        lastNameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        termsOfService().should("exist");
        createUserButton().should("exist");
    })

    describe("Filling out inputs", () => {

        it("Can navigate to the site", () => {
            cy.url().should("include", "localhost");
        })

        it("Can type in the inputs", () => {
            firstNameInput()
                .should("have.value", "")
                .type("Lonagin")
                .should("have.value", "Lonagin");
            lastNameInput()
                .should("have.value", "")
                .type("West")
                .should("have.value", "West");
            emailInput()
                .should("have.value", "")
                .type("lonaginwest9@gmail.com")
                .should("have.value", "lonaginwest9@gmail.com");
            passwordInput()
                .should("have.value", "")
                .type("88888888")
                .should("have.value", "88888888");
        })
    })

    describe("Checking on checkbox", () => {

        it("Can the checkbox be checked", () => {
            termsOfService().check();
        })
    })

    describe("Submitting the form", () => {

        it("Can the form be submitted", () => {
            createUserButton().click();
        })
    })

    describe("Checking for form validation", () => {

        it("validation when an input is left empty", () => {
           cy.get("p").should("exist");//needs some work still...
        })
    })

})