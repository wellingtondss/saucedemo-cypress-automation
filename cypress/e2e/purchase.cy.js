import inventoryPage from '../pages/inventoryPage'
import cartPage from '../pages/cartPage'
import checkoutPage from '../pages/checkoutPage'
import checkoutOverviewPage from '../pages/checkoutOverviewPage'

describe('Purchase Flow', () => {

  it('Should complete purchase successfully', () => {
    cy.login('standard_user', 'secret_sauce')

    const cartItems = []

    // Sort by Price: Low to High and add the last product
    inventoryPage.sortLowToHigh()
    inventoryPage.addLastProduct().then((productName) => {
      cartItems.push(productName)
      
      // Sort by Name: A to Z and add the first product
      inventoryPage.sortAZ()
      return inventoryPage.addFirstProduct()
    }).then((productName) => {
      cartItems.push(productName)
      
      // Validate header and footer
      inventoryPage.validateHeaderFooter()

      // Navigate to checkout
      cartPage.checkout()

      // Fill customer information
      checkoutPage.fillInformation('Wellington', 'Santos', '12345')

      // Validate selected products in checkout overview
      checkoutOverviewPage.validateItems(cartItems)

      // Finish purchase
      checkoutOverviewPage.finish()

      // Ensure we are on the checkout complete page
        cy.url().should('include', '/checkout-complete.html')

        // Logout and verify we returned to the login page
        inventoryPage.logout()
      })
  })
})
    