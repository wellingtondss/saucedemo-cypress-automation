class InventoryPage {

  sortLowToHigh() {
    cy.get('[data-test="product-sort-container"]').select('lohi')
  }

  sortAZ() {
    cy.get('[data-test="product-sort-container"]').select('az')
  }

  addLastProduct() {
    // Get the product name first, then click the button, and return the name
    return cy.get('.inventory_item').last().find('.inventory_item_name').invoke('text').then((text) => {
      const productName = text.trim()
      
      // Click the "Add to cart" button inside the last product container
      cy.get('.inventory_item').last().within(() => {
        cy.contains('Add to cart').click()
      })
      
      // Return the product name wrapped to keep Cypress command chain
      return cy.wrap(productName)
    })
  }

  addFirstProduct() {
    // Get the product name first, then click the button, and return the name
    return cy.get('.inventory_item').first().find('.inventory_item_name').invoke('text').then((text) => {
      const productName = text.trim()
      
      // Click the "Add to cart" button inside the first product container
      cy.get('.inventory_item').first().within(() => {
        cy.contains('Add to cart').click()
      })
      
      // Return the product name wrapped to keep Cypress command chain
      return cy.wrap(productName)
    })
  }

  validateHeaderFooter() {
    // Verify that header logo and footer are visible
    cy.get('.app_logo').should('be.visible')
    cy.get('footer.footer').should('be.visible')
  }

   // ===== Menu actions (optional extra) =====

  // Open the burger menu (sidebar)
  openMenu() {
    cy.get('#react-burger-menu-btn').should('be.visible').click()
  }

  // Navigate to "All Items" (inventory page) from the sidebar menu
  goToAllItems() {
    this.openMenu()
    cy.get('#inventory_sidebar_link').should('be.visible').click()
    cy.url().should('include', '/inventory.html')
  }

  // Logout from any logged-in page (including checkout complete page)
  logout() {
    this.openMenu()
    cy.get('#logout_sidebar_link').should('be.visible').click()

    // Verify user is back on login page
    cy.url().should('eq', Cypress.config().baseUrl)
    cy.get('[data-test="login-button"]').should('be.visible')
  }
}

export default new InventoryPage()