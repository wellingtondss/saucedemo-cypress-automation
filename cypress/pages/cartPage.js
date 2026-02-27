class CartPage {

  checkout() {
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
  }

}

export default new CartPage()