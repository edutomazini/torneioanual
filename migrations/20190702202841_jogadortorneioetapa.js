exports.up = function(knex, Promise) {
  return knex.schema.createTable('torneioetapajogador', table => {
      table.increments('id').primary()
      table.integer('torneio_id').unsigned().notNullable()
      table.foreign('torneio_id').references('torneio.id')
      table.integer('etapa_id').unsigned().notNullable()   
      table.foreign('etapa_id').references('etapa.id')  
      table.integer('jogador_id').unsigned()
      table.foreign('jogador_id').references('jogador.id')   
      table.integer('score').unsigned()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('torneioetapajogador')
}