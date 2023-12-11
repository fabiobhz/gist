describe('Creates a gist', () => {

  it('Creates a gist in the app', function () {
    const gist_token = Cypress.env('gist_access_token')
    console.log(gist_token);
    cy.request({
        method: 'POST',
        url: `/gists`,
        headers: {
            Authorization: `Bearer ${gist_token}`,
            Accept:`application/vnd.github+json`
        },
        body: {
            files: {
                'distribusion.txt': {
                    content: 'This is the file content for the Distribusion QA cypress challenge.'
                }
            },
            description: 'Just a gist for the Distribusion QA challenge.'
        }
    }).then((response) => {
        cy.task('save', response.body.id);
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('description', 'Just a gist for the Distribusion QA challenge.');
        expect(response.body.owner.login).to.equal('fabiobhz');
    });
    
  });
})