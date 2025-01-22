//your JS code here. If required.
it('should display correct paragraph text', () => {
  cy.visit('path_to_your_form.html');  // Ensure this is the correct path

  // Update the test to expect the colon at the end
  cy.get('p').should('have.text', '5 software program developer profession paths:');
});
