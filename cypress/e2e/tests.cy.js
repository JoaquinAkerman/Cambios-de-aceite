/// <reference types="Cypress" />

import { dataDeVehiculos } from '../fixtures/data_de_vehiculos.js';

describe('Carga los vehiculos', () => {
  it('Chequea que se muestre la alerta en los elementos con clase alerta', () => {
    cy.visit('http://127.0.0.1:81/');
    cy.get('.alerta').should('contain.text', 'realizar cambio');
  });
  it('Chequea que el elemento ford-f100 tenga el id y texto correspondiente', () => {
    const { nombre, proximoCambio, fechaProximoCambio } = dataDeVehiculos[0];
    cy.get('#ford-f100').should('contain.text', nombre);
    cy.get('#fecha-de-cambio-ford-f100').should(
      'contain.text',
      proximoCambio,
      fechaProximoCambio,
    );
  });
});
