// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addUser', (user) => { 
    cy.request({
        method: "POST",
        url: "https://petstore.swagger.io/v2/user",
        body: user
    }).then((response) => {
        expect(response.status).to.eq(200);
    });
})

Cypress.Commands.add('checkUser', (user) => { 
    cy.request({
        method: "GET",
        url: `https://petstore.swagger.io/v2/user/${user.username}`,
        failOnStatusCode: false
    }).then((response) => {
        expect(JSON.stringify(response.body)).to.eq(JSON.stringify(user));
        expect(response.status).to.eq(200);
    });
})

Cypress.Commands.add('checkUserNotFound', (user) => { 
    cy.request({
        method: "GET",
        url: `https://petstore.swagger.io/v2/user/${user.username}`,
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(404);
    });
})

Cypress.Commands.add('updateUser', (user, data) => { 
    cy.request({
        method: "PUT",
        url: `https://petstore.swagger.io/v2/user/${user.username}`,
        body: data
    }).then((response) => {
        expect(response.status).to.eq(200);
    });
})

Cypress.Commands.add('deleteUser', (user) => { 
    cy.request({
        method: "DELETE",
        url: `https://petstore.swagger.io/v2/user/${user.username}`
    }).then((response) => {
        expect(response.status).to.eq(200);
    });
})
