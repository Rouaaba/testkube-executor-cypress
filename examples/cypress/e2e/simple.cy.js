describe('Check content in Testkube documentation', function() {
    it('Visit the documentation URL', function() {
        cy.visit('https://docs.testkube.io/articles/getting-started');
    });

    it('Check section copy', function() {
        // Modify the selector based on the actual class or ID of the section containing the copy
        // For example, if the copy is within a div element with class 'article-content'
        cy.contains('testkube agent debug', { timeout: 20000 }).should('be.visible');

    });
});
