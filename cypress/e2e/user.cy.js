const users = require('../fixtures/users');
const { addUser, updateUser, checkUser, checkUserNotFound, deleteUser } = require('../support/commands');

describe('User API test', () => {
    beforeEach(() => {
        cy.addUser(users.new);
    })

    it('Should add new user', ()=> {
        cy.checkUser(users.new);
        cy.deleteUser(users.new);
    })

    it('Should update user', ()=> {
        cy.updateUser(users.new, users.update);
        cy.checkUser(users.update);
        cy.deleteUser(users.update);
    })

    it('Should delete user', ()=> {
        cy.deleteUser(users.new);
        cy.checkUserNotFound(users.new);
    })
})
