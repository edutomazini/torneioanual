torneio anual

Foi utilizado knex (knex.org) para facilitar a criacao e manipulacao de dados.

apos clonar ou baixar o projeto, execute:
npm run install

altere as conexoes do banco no arquivo knesfile.js
apos isso, para criar o banco, execute: 
knex migrate:latest

execute com na pasta 'src':
node server.js

verifique o help em:
http://localhost:3000/apidoc/