describe('Login Flow', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Should not allow locked_out_user to login', () => {
    cy.login('locked_out_user', 'secret_sauce')
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('Should login successfully with standard_user', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('.app_logo').should('be.visible')
  })

})