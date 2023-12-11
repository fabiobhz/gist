describe('Checks if a gist exists', () => {

  it('Navigates to a gist', function () {
    cy.task('load').then((gist_id) => {
      cy.request(`/gists/${gist_id}`);
    }).then((response) => {
        expect(response.status).to.equal(200);
      });
  });
});