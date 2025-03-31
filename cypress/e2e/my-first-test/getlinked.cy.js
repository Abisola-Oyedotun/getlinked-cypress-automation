describe('My First Test', () => {
    beforeEach(() => {
        // Visit login page before each test
        cy.visit('https://getlinked-main-dev-frontend.vercel.app');
    });

    it('should display the application name', () => {
      cy.get('h1').contains("Getlinked") 
    });

    it('should display app introduction', () => {
        cy.get('h1')
          .contains("Where Dreams Meet Opportunities") // Main heading text
          .should('be.visible');
      
        cy.get('h1')
          .contains("for a") // Checking the "for a" text
          .should('be.visible');
      
        cy.get('h1 span')
          .contains("Perfect Match!") // The styled span part
          .should('be.visible');
      });

      it('Verify that user can select the hire talent option', () => {
      cy.get('.p-4 > .mt-8 > .bg-white').click()
    });
    
    it('Verify that user can select the get hired option', () => {
      cy.get('.p-4 > .mt-8 > .bg-white').click()
    });
    
    it('Verify that user can select the get hired option', () => {
      cy.get('.p-4 > .mt-8 > .bg-white').click()
    });
     
    it('Verify that user can submit application a global intern', () => {
    cy.get('.flex.items-center.justify-center.gap-x-2.rounded-full.bg-white.p-2.px-5.text-sm.font-light.text-black').click()
  });

  it('Verify that user can submit application as a global intern', () => {
    // Define randomEmail before using it
    const randomEmail = `user${Date.now()}@example.com`;
  
    cy.get('.flex.items-center.justify-center.gap-x-2.rounded-full.bg-white.p-2.px-5.text-sm.font-light.text-black').click();
    cy.get("input[placeholder='Enter your email']").type(randomEmail);
    cy.get('#submit').click();
    // cy.get("input[placeholder='joseph@getlinked.com']").type(randomEmail)
    // cy.get("input[placeholder='Joseph Ogbu']").type('Femi Branch')
    // cy.get("input[placeholder='Enter your phone number']").type('2349000000002')
  });
 
    // it('Login with valid email', () => {
    //     // Wait for the email input field to be visible before typing
    //     cy.get('input[name="email"]').should('be.visible').type('kassia@mailinator.com');

    //     // Wait for the password input field to be visible before typing
    //     cy.get('input[name="password"]').should('be.visible').type('@Password12');

    //     // Click the login button
    //     cy.contains('button', 'Proceed').should('be.visible').click();
    // });
});
