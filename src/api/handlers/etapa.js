const db = require('../../config/database')

async function getEtapa (id) {
  return new Promise(async (resolve, reject) => {
    try {
      const etapa = db.select('*').from('etapa').modify(function (queryBuilder) {
        if (id !== undefined) {
          queryBuilder.where('id', id);
        }
      })
        .then(function (results) {
          return results
        })
      resolve(etapa)
    } catch (error) {
      reject(error)
    }
  })
}

async function getEtapaNome (nome) {
  return await db.select('*').from('etapa').where('nome', nome)
}

async function setEtapa (data) {
  const etapa = await getEtapaNome(data.nome)
  if (etapa.length != 0)
    throw ('etapa já existe.')

  const _id = await db('etapa').insert(data)
  return await getEtapa(_id[0])
}


exports.getEtapa = getEtapa
exports.setEtapa = setEtapa