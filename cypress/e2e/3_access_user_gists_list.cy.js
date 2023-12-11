describe('Checks a user gists list', () => {

  it('Navigates to a user gists list page', function () {
    let webGistsUrl = Cypress.env('webGistsUrl');
    cy.visit(`${webGistsUrl}/fabiobhz`);
  });

  it('Checks if it is the correct user', function () {
    cy.get('.p-name').contains('Fabio Gomes');
    cy.get('.p-nickname').contains('fabiobhz');
  });

  it('Accesses a gist', function () {
    cy.contains('distribusion.txt').click();
  });

  it('Ensures the user is in the gist page', function () {
    cy.get('.gisthead').should('be.visible');
  })
});