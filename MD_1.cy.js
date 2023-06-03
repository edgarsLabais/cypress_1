describe('Selectable Demo', () => {
    it('should highlight selected items', () => {
      cy.visit('https://demoqa.com/selectable')
      
      // Klikšķināt uz "Grid" pogas
      cy.contains('Grid').click()
  
      // Klikšķināt uz "Two", "Four", "Six" un "Eight" elementiem
      cy.contains('li', 'Two').click()
      cy.contains('li', 'Four').click()
      cy.contains('li', 'Six').click()
      cy.contains('li', 'Eight').click()
  
      // Pārbaudīt, vai "Two", "Four", "Six" un "Eight" ir izcelti
      cy.get('ol#gridContainer li.ui-selected')
        .should('contain', 'Two')
        .and('contain', 'Four')
        .and('contain', 'Six')
        .and('contain', 'Eight')
  
      // Pārbaudīt, vai "One", "Three", "Five", "Seven", "Nine" nav izcelti
      cy.get('ol#gridContainer li:not(.ui-selected)')
        .should('contain', 'One')
        .and('contain', 'Three')
        .and('contain', 'Five')
        .and('contain', 'Seven')
        .and('contain', 'Nine')
    })
  })