describe('dashboard', () => {
  beforeEach(() => {
    cy.visit('localhost:4200/dashboard');
  });

  it(`has the new item with text 'New Item'`, () => {
    cy.contains('New Item');
    cy.get('.new-item').should('contain', 'New Item');
  });
  

  it(`has title 'Tour of Heroes'`, () => {
    cy.contains('Tour of Heroes');
    cy.get('h1').should('contain', 'Tour of Heroes');
    cy.title().should('eq', 'Tour of Heroes');
  });

  it(`has the correct header`, () => {
    cy.contains('Dashboard');
    cy.get('nav a').eq(1).should('contain', 'Heroes');
    cy.contains('Top Heroes');
  });

  it(`has the correct search header`, () => {
    cy.contains('Hero Search');
    cy.get('app-hero-search').should('contain', 'Hero Search');
  });

  it(`says hello from Matt`, () => {
    cy.contains('Hello from Matt');
  });

  it('can search', () => {
    cy.get('#search-box').type('Bombasto');
    cy.get('.search-result li').contains('Bombasto').click();
    cy.url().should('include', '/detail/13');
  });
});
