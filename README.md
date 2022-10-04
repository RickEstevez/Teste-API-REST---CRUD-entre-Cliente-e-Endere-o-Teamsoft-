# Teste API REST CRUD entre Cliente e Endereço (Teamsoft)

Teste de API REST para a empresa Teamsoft contendo a operação CRUD (Create, Read, Update, Delete) da tabela Cliente com a tabela Endereço. 

# Documentação

https://documenter.getpostman.com/view/23652735/2s83zcTSHu

# Apresentação

Documentação da API REST para a empresa Teamsoft contendo a operação CRUD (Create, Read, Update, Delete) da tabela Client com a tabela Address com relacionamento 1 para N (1 para vários).

# Autenticação

Há rotas públicas como: Insert a Client (POST), Get all Clients (GET), Get a Client (GET), Delete a Client (DELETE), Update a Client (PATCH), Insert a Address (POST), Get all Addresses (GET), Get a Address (GET), Delete a Address (DELETE), Update a Address (PATCH).

# Error Codes

** 400 - Bad Request **

Dados enviados de forma incorreta ou fora do padrão.

** 422 - Unprocessable Entity **

O servidor entende o tipo de conteúdo da entidade da requisição, e a sintaxe da requisição está correta, mas não foi possível processar as instruções presentes.

** 500 - Internal Server Error **

Uma mensagem de erro genérica, dada quando nenhuma mensagem mais específica é adequada.

# Tecnologias

* Node.js
* AdonisJS V5
* Typescript
* Mysql (Migrations)
* Postman
