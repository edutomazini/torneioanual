<p><b>Torneio Anual</b>

Foi utilizado knex (knex.org) para facilitar a criacao e manipulacao de dados.<br><br>

Foi desenvolvido usando-se o MySQL. Mas com alguns ajustes, praticamente instalar o modulo do banco desejado, sera possivel utilizar outros sistemas de bancos de dados<br><br>

Apos clonar ou baixar o projeto, execute:<br>
<b>npm install</b><br><br>

Crie um banco de dados vazio e altere as conexoes do banco no arquivo knesfile.js<br>
Apos isso, para criar todas as tabelas e relacionamentos, execute: <br>
<b>knex migrate:latest</b><br><br>

Execute, na pasta 'src':<br>
<b>node server.js</b><br><br>

Verifique o help em:<br>
https://torneioanual.herokuapp.com/apidoc/<br><br>

Uma api funcional está publicada em:<br>
https://torneioanual.herokuapp.com<br><br>

Necessario <i>basic authentication</i><br>
username: projeto<br>
password: senha123<br>