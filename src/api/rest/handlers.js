const db = require('../../config/database')

async function getJogador(id) {
  let query = db.select('*').from('jogador')
  if (id !== undefined)
    query.where('id',id)
  
    query.then(function(results) {
      //query success
      return results;
    })
    .then(null, function(err) {
      //query fail
      return err;
    });
}

async function setJogador(data) {
  console.log(''+data)
  let id
  //const { nome, cpf } = data
  await db('jogador').insert(data)
  return await getJogador(undefined)
}


exports.getJogador = getJogador
exports.setJogador = setJogador