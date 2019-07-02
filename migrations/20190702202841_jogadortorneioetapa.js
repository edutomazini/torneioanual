exports.up = function(knex, Promise) {
  return knex.schema.createTable('jogadortorneioetapa', table => {
      table.increments('id').primary()
      table.integer('toneio_id').unsigned().notNullable()
      table.foreign('toneio_id').references('torneio.id')
      table.integer('etapa_id').unsigned().notNullable()   
      table.foreign('etapa_id').references('etapa.id')  
      table.integer('jogador_id').unsigned().notNullable()   
      table.foreign('jogador_id').references('jogador.id')   
      table.integer('pontos').unsigned()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jogadortorneioetapa')
};