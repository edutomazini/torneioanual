const db = require('../../config/database')

async function getJogador (id) {
  return new Promise(async (resolve, reject) => {
    try {
      const jogador = db.select('*').from('jogador').modify(function (queryBuilder) {
        if (id !== undefined) {
          queryBuilder.where('id', id);
        }
      })
        .then(function (results) {
          return results
        })
      resolve(jogador)
    } catch (error) {
      reject(error)
    }
  })
}

async function getJogadorCpf (cpf) {
  return await db.select('*').from('jogador').where('cpf', cpf)
}

async function setJogador (data) {
  const jogador = await getJogadorCpf(data.cpf)
  if (jogador != null)
    throw ('cpf já existe.')

  const _id = await db('jogador').insert(data)
  return await getJogador(_id[0])
}


exports.getJogador = getJogador
exports.setJogador = setJogador