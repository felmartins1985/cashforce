# CashForce

Consiste em uma aplicação full-stack dockerizada, em que é  possível ver as notas fiscais emitidas, contendo seus valores, data de emissão, cedente e sacador.


### BackEnd:

* Construído com Node.js, Express, Typescript, Sequelize, MySQL e Docker
* Utilizando os princípios SOLID e Programação Orientada a Objetos
* Aplicando Arquitetura de Software, com as camadas de Modelo, Serviço e de Controladores

### FrontEnd:
* Construído com React, Context API, React Hooks, Typescript e TailWind

### Instruções

- Para rodar a aplicação localmente e os testes do backend, realize o clone do projeto e utilize os comandos a seguir:

```
Para clonar o projeto:
git clone git@github.com:felmartins1985/cashforce.git

Para rodar a aplicação dockerizada, instalar as dependências e iniciar as aplicações:
<-- na raiz do projeto -->
cd app && npm run compose:up // para subir o docker-compose
docker exec -it app_backend /bin/sh // para acessar o container do backend
npm run db:reset // para criar as tabelas e popular no banco de dados
exit // para sair do container do backend

Para parar a aplicação dockerizada:
<-- na raiz do projeto -->
cd app && npm run compose:down // para parar os containers
```

### Endpoints


#### Conta

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna as notas fiscais | http://localhost:3001 |


