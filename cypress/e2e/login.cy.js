describe('Login Flow', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Should not allow locked_out_user to login', () => {
    cy.login('locked_out_user', 'secret_sauce')

    // Validate that the correct error message is displayed
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'locked out')
  })

  it('Should login successfully with standard_user', () => {
    cy.login('standard_user', 'secret_sauce')

    // Validate successful login by checking the app logo
    cy.get('.app_logo').should('be.visible')
  })

})