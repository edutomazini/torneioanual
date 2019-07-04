const db = require('../../config/database')
const { getEtapa } = require("../handlers/etapa")

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

async function getTorneios () {
  return await db.select('torneioetapajogador.id', 'torneio.id as idtorneio', 'torneio.nome as nometorneio', 'etapa.id as idetapa', 'etapa.nome as nomeetapa').from('torneioetapajogador').innerJoin('torneio', 'torneioetapajogador.torneio_id', '=', 'torneio.id').innerJoin('etapa', 'torneioetapajogador.etapa_id', '=', 'etapa.id').whereNull('torneioetapajogador.jogador_id')
}

async function getTorneioNome (nome) {
  return await db.select('*').from('torneio').where('nome', nome)
}

async function getTorneioEtapa (idtorneio, idetapa) {
  return await db.select('*').from('torneioetapajogador').where('torneio_id', idtorneio).andWhere('etapa_id', idetapa)
}

async function getTorneioEtapaId (id) {
  return await db.select('torneioetapajogador.id', 'torneio.id as idtorneio', 'torneio.nome as nometorneio', 'etapa.id as idetapa', 'etapa.nome as nomeetapa').from('torneioetapajogador').innerJoin('torneio', 'torneioetapajogador.torneio_id', '=', 'torneio.id').innerJoin('etapa', 'torneioetapajogador.etapa_id', '=', 'etapa.id').where('torneioetapajogador.id', id).orderBy('torneioetapajogador.torneio_id','torneioetapajogador.etapa_id')
}

async function setTorneio (data) {
  const torneio = await getTorneioNome(data.nome)
  if (torneio.length != 0)
    throw ('torneio já existe.')

  const _id = await db('torneio').insert(data)
  return await getTorneio(_id[0])
}

async function setTorneioEtapa (idtorneio, idetapa) {
  const torneioEtapa = await getTorneioEtapa(idtorneio, idetapa)
  if (torneioEtapa.length != 0)
    throw ('torneio e etapa já existem.')

  const torneio = await getTorneio(idtorneio)
  if (torneio.length == 0)
    throw ('torneio nao existe.')

  const etapa = await getEtapa(idetapa)
  if (etapa.length == 0)
    throw ('etapa nao existe.')

  const _id = await db('torneioetapajogador').insert({
    torneio_id: idtorneio,
    etapa_id: idetapa
  })
  return await getTorneioEtapaId(_id[0])
}

exports.getTorneio = getTorneio
exports.setTorneio = setTorneio
exports.setTorneioEtapa = setTorneioEtapa
exports.getTorneios = getTorneios