/// <reference types="Cypress" />

describe('Carga los vehiculos', () => {
  it('Chequea que se muestre la alerta', () => {
    cy.visit('http://127.0.0.1:81/');
    cy.get('.alerta').should('contain.text', 'realizar cambio');
  });
});
