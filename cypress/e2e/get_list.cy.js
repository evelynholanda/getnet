/// <reference types="cypress" />

describe('List all resources', () => {


    it('List resources', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/unknown",
            //utilizado para falhar algumas requisições quando não são validas
            failOnStatusCode: false
        }).as('getResult')
  
     //validates
        cy.get("@getResult")
            .then((response) => {
              expect(response.status).equal(200)
              expect(response.body).not.empty
              expect(response.body.total).equal(12)
              expect(response.body.per_page).equal(6)
             
                
  
        })
    })
  
  })
  
  
  
  
  
  
  
  
  