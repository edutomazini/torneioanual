const db = require('../../config/database')

async function getTorneio (id) {
  return new Promise(async (resolve, reject) => {
    try {
      const torneio = db.select('*').from('torneio').modify(function (queryBuilder) {
        if (id !== undefined) {
          queryBuilder.where('id', id)
        }
      })
        .then(function (results) {
          return results
        })
      resolve(torneio)
    } catch (error) {
      reject(error)
    }
  })
}

async function getTorneioNome (nome) {
  return await db.select('*').from('torneio').where('nome', nome)
}

async function setTorneio (data) {
  const torneio = await getTorneioNome(data.nome)
  if (torneio.length != 0)
    throw ('torneio já existe.')

  const _id = await db('torneio').insert(data)
  return await getTorneio(_id[0])
}


exports.getTorneio = getTorneio
exports.setTorneio = setTorneio