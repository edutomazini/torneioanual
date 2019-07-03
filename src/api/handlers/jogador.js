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

async function setJogador (data) {
  const _id = await db('jogador').insert(data)
  return await getJogador(_id[0])
}


exports.getJogador = getJogador
exports.setJogador = setJogador