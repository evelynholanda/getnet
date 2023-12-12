/// <reference types="cypress" />

  
describe('API Test - Create New User', () => {
    it('should create a new user', () => {
      // Define o corpo da requisição
      const dataAtual = (new Date().toISOString().slice(0, 16))

      const requestBody = {
        name: 'Evelyn',
        job: 'QA Engineer'
      }
  
      // Realiza a requisição POST para a API
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: requestBody
      }).then((response) => {
    
  
        // Validates
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal('Evelyn')
        expect(response.body.name).not.empty
        expect(response.body.createdAt).not.empty
        // validate a createdAt
        expect(response.body.createdAt).to.exist
        expect(response.body.createdAt.slice(0, 16)).to.equal(dataAtual)

      })
    })
  })