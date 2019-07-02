exports.up = function(knex, Promise) {
  return knex.schema.createTable('torneio', table => {
      table.increments('id').primary()
      table.string('nome', 50)
      table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('torneio')
};