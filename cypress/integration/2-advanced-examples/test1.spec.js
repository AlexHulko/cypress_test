describe('Google search', ()=>{
    // comment
    it ('search something', ()=>{
        cy.visit('https://inputtypes.com/')
        cy.get("input[class='input-item__display-input']").type('wendesday').type('{enter}')
        cy.contains('Form submitted! No validation errors.')
    })
});