<p>Torneio Anual

Foi utilizado knex (knex.org) para facilitar a criacao e manipulacao de dados.<br><br>

Foi desenvolvido usando-se o MySQL. Mas com alguns ajustes, praticamente instalar o modulo do banco desejado, é possivel utilizar outros sistemas de bancos de dados<br><br>

Apos clonar ou baixar o projeto, execute:<br>
npm install<br><br>

Crie um banco de dados vazio e altere as conexoes do banco no arquivo knesfile.js<br>
Apos isso, para criar todas as tabelas e relacionamentos, execute: <br>
knex migrate:latest<br><br>

Execute, na pasta 'src':<br>
node server.js<br><br>

Verifique o help em:<br>
https://torneioanual.herokuapp.com/apidoc/<br><br>

Uma api funcional está publicada em:<br>
https://torneioanual.herokuapp.com<br><br>

Necessario <i>basic authentication</i><br>
username: projeto<br>
password: senha123<br>