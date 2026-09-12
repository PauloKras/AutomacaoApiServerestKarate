# Automação de API com Karate Framework

Este projeto demonstra a automação de testes de API utilizando o Karate Framework, uma ferramenta de teste de código aberto que combina automação de API, simulação e desempenho em uma única estrutura.

## Tecnologias Utilizadas

*   **Karate Framework**: Para automação de testes de API.
*   **Maven**: Ferramenta de gerenciamento de projeto e construção.
*   **Java**: Linguagem de programação.

## Pré-requisitos

Antes de executar os testes, certifique-se de ter os seguintes softwares instalados:

*   **Java Development Kit (JDK)**: Versão 8 ou superior.
*   **Apache Maven**: Versão 3.6.0 ou superior.

## Estrutura do Projeto

*   `pom.xml`: Contém as dependências do projeto e a configuração do plugin Maven para executar os testes Karate.
*   `src/test/java/com/serverest/karate/karate-config.js`: Arquivo de configuração do Karate, onde variáveis de ambiente e configurações globais podem ser definidas.
*   `src/test/java/com/serverest/karate/serverest.feature`: O arquivo principal de feature do Karate, contendo os cenários de teste para a API Serverest.
*   `src/test/java/com/serverest/karate/ServerestRunner.java`: A classe Runner do JUnit para executar os testes Karate.

## Integração Contínua (CI/CD)

Este projeto utiliza [GitHub Actions](https://docs.github.com/actions) para automação de Integração Contínua (CI). Um pipeline é executado automaticamente a cada commit (push).

O workflow de CI ([`.github/workflows/karate-ci.yml`](.github/workflows/karate-ci.yml)) realiza as seguintes etapas:

1.  **Checkout do código**: Clona o repositório.
2.  **Configuração do JDK**: Configura o ambiente Java (JDK 17).
3.  **Build com Maven**: Compila o projeto utilizando Maven (ignorando a execução dos testes com `-DskipTests`).
4.  **Execução dos Testes Karate**: Executa os testes de API definidos com o Karate Framework, utilizando variáveis de ambiente (secrets) para `BASEURL`, `USER_EMAIL` e `USER_PASSWORD`.

O status da execução da pipeline pode ser visualizado na seção "Actions" do repositório GitHub, onde você pode ver os detalhes de cada execução, incluindo logs e resultados dos testes.

## Como Executar os Testes

Para executar todos os testes automatizados, navegue até a raiz do projeto no terminal e execute o seguinte comando Maven:

```bash
mvn clean test
```

Este comando irá compilar o projeto, executar os testes definidos nos arquivos `.feature` e gerar relatórios de teste. Os relatórios HTML são geralmente gerados no diretório `target/karate-reports`.