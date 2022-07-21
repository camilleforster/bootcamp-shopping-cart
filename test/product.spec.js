context ('BOOTCAMP', () => {
    it("Should load the page", () => {
        cy.visit("https://www.godaddy.com");
        cy.get('a .button.fos');
    })
})