/// <reference types="Cypress" />

import { vehicle_data } from '../../modules/vehicle_data';

describe('Carga los vehiculos', () => {
  it('Checks that the alert is shown in the elements with class alert', () => {
    cy.visit('http://127.0.0.1:81/');
    cy.get('.alert').should('contain.text', 'realizar cambio');
  });
  it('Checks that the ford-f100 element has the corresponding id and text', () => {
    const fordF100 = vehicle_data.find((object) => object.name === 'Ford F100');
    const { name, nextChange, nextChangeDate } = fordF100;
    cy.get('#ford-f100').should('contain.text', name);
    cy.get('#change-date-ford-f100').should('contain.text', nextChange, nextChangeDate);
  });
});
