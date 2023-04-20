describe('Hero Search', () => {
    beforeEach(() => {
      cy.visit('localhost:4200/dashboard');
    });
  
    // Happy case 1: Searching for an existing hero
    it('TU01: Search for an existing hero and navigate to its details page', () => {
      cy.get('#search-box').type('Bombasto');
      cy.get('.search-result li').contains('Bombasto').click();
      cy.url().should('include', '/detail/13');
    });
  
    // Happy case 2: Searching for a hero with partial name
    it('TU02: Search for a hero using partial name and find the correct hero', () => {
      cy.get('#search-box').type('Magn');
      cy.get('.search-result li').contains('Magneta').should('be.visible');
    });
  
    // Exception case 1: Searching for a non-existent hero
    it('TU03: Search for a non-existent hero and display no results', () => {
      cy.get('#search-box').type('ThisHeroDoesNotExist');
      cy.get('.search-result li').should('not.exist');
    });
  
    // Exception case 2: Searching with an empty input
    it('TU04: Search with an empty input and display no results', () => {
      cy.get('#search-box').type('   ').type('{enter}');
      cy.get('.search-result li').should('not.exist');
    });
  });
