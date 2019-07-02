exports.up = function(knex, Promise) {
  return knex.schema.createTable('jogador', table => {
      table.increments('id').primary()
      table.string('nome', 50)
      table.string('cpf', 50)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jogador')
};