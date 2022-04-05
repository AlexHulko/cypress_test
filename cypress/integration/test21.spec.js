 /// <reference types="Cypress" />
 it("Get with find and eq", ()=>{
        cy.visit("https://next.privat24.ua/")
        cy.get('#email')
    })

    it.only("by id", ()=>{
        cy.visit("https://next.privat24.ua/deposit/open")
        cy.get('tbody').find('td').find('div').find('button').eq('0')
    })
