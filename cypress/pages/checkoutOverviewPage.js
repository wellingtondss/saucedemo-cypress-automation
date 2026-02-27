class CheckoutOverviewPage {

  validateItems(cartItems) {
    // Verify that the number of items matches the expected amount
    cy.get('.cart_item', { timeout: 10000 }).should('have.length', cartItems.length)
    
    // Verify that each item matches the expected product name
    cy.get('.cart_item').each(($item, index) => {
      cy.wrap($item)
        .find('.inventory_item_name')
        .invoke('text')
        .then((text) => {
          expect(text.trim()).to.equal(cartItems[index])
        })
    })
  }

  // Confirm that the order completion message is visible
  finish() {
    cy.get('[data-test="finish"]').click()
    cy.contains('Thank you for your order!').should('be.visible')
  }
}

export default new CheckoutOverviewPage()