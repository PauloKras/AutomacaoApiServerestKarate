Feature: Testes da API Serverest

  Background:
    * url config.baseUrl

  Scenario: Consultar lista de usuários
    Given path '/usuarios'
    When method GET
    Then status 200
    And match response contains { quantidade: '#number' }
    And match response contains { usuarios: '#array' }

  Scenario: Realizar login de usuário
    Given path '/login'
    And request { email: config.user.email, password: config.user.password }
    When method POST
    Then status 200
    And match response contains { authorization: '#string' }