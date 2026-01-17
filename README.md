# 📘 README — Automação de Testes (E2E, API e Carga)

## 📌 Visão Geral

Este repositório contém a automação de testes desenvolvida como parte de um **desafio técnico**, contemplando **testes End-to-End (E2E)**, **testes de API** e **testes de Carga**, utilizando ferramentas modernas e boas práticas de automação.

A aplicação web utilizada para os testes E2E é o site público **Commit Quality**.

---

## 🧪 Tipos de Testes Implementados

- **Testes E2E (End-to-End)**  
  Cypress + Cucumber (BDD em português)

- **Testes de API**
  - Cypress (`cy.request`)
  - Postman (Collection Runner com reutilização de variáveis)

- **Testes de Carga**
  - k6

---

## 🧰 Tecnologias Utilizadas

- Cypress  
- Cucumber (`@badeball/cypress-cucumber-preprocessor`)  
- JavaScript  
- BDD (Gherkin em Português)  
- Page Object Model (POM)  
- Custom Commands  
- Hooks por TAG  
- Postman  
- k6  
- Node.js / npm  

---

## ⚙️ Pré-requisitos

Antes de executar os testes, é necessário ter instalado:

- Node.js (versão 16 ou superior)
- npm
- k6 (para testes de carga)
- Postman (para testes de API via Run)

Verificar versões:

- node -v
- npm -v
- k6 version

---

## 📥 Instalação

Clonar o repositório:

- git clone {url-do-repositorio}
- cd {nome-do-projeto}

Instalar depêndencias:

- npm install

---

## ▶️ Execução

### Testes de API (Cypress)

Os testes de API via newman estão localizados na pasta api.

Executar:
  - npx newman run api/api_postman_collection.json -e api/api_postman_environment.json

---

### Testes E2E (Cypress)
🔹 Modo interativo (GUI)
  - npx cypress open

Passos:

    Selecione 'E2E Testing'

    Escolha o navegador

    Clique no arquivo .feature desejado

🔹 Modo terminal
  - npx cypress run

---

### Testes de Carga (k6)
  - k6 run k6/loadTestPosts.js

--- 

### Pipeline CI/CD
A pipeline foi configurada para rodar manualmente (workflow_dispatch) e também com configuração para push/pull request na master.