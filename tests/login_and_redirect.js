/* eslint-disable no-undef */
import CreateJob from '../pages/CreateJob';

describe('login and redirect', () => {
  beforeEach(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
  });

  it('verify login and redirct to employer center', () => {
    cy.visit('/');
  });

  it('click create job button', () => {
    CreateJob.clickCreateJob();  });
});
