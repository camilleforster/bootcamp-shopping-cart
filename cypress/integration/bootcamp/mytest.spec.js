context ('BOOTCAMP', () => {
    // it("Should load the page", () => {
    //     cy.visit("https://www.google.com");
    // })
    // it.skip("Should have the word Welcome", () => {
    //     cy.get('h1');
    // })
    // it("Search icon", () => {
    //     cy.get('.QCzoEc > svg');
    // })
    // it("Contains Google", () => {
    //     cy.contains("Google");
    // })
    it ("Should load the page", () => {
        cy.visit("/");
    })

    it ("Clicks Add to Cart", () => {
        cy.get('.MuiButton-label')
        .click();
    })
})