const db = require('../../config/database')
const { getEtapa } = require("../handlers/etapa")
const { asyncForEach } = require('../utils/asyncUtils')
const lodash = require('lodash')

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

async function getTorneiosEtapas () {
  return await db.select('torneioetapajogador.id', 'torneio.id as idtorneio', 'torneio.nome as nometorneio', 'etapa.id as idetapa', 'etapa.nome as nomeetapa').from('torneioetapajogador').innerJoin('torneio', 'torneioetapajogador.torneio_id', '=', 'torneio.id').innerJoin('etapa', 'torneioetapajogador.etapa_id', '=', 'etapa.id').whereNull('torneioetapajogador.jogador_id').orderBy('torneioetapajogador.torneio_id').orderBy('torneioetapajogador.etapa_id')
}

async function getTorneioNome (nome) {
  return await db.select('*').from('torneio').where('nome', nome)
}

async function getTorneioEtapa (idtorneio, idetapa) {
  return await db.select('*').from('torneioetapajogador').where('torneio_id', idtorneio).andWhere('etapa_id', idetapa)
}

async function getTorneioEtapaId (id) {
  return await db.select('torneioetapajogador.id', 'torneio.id as idtorneio', 'torneio.nome as nometorneio', 'etapa.id as idetapa', 'etapa.nome as nomeetapa').from('torneioetapajogador').innerJoin('torneio', 'torneioetapajogador.torneio_id', '=', 'torneio.id').innerJoin('etapa', 'torneioetapajogador.etapa_id', '=', 'etapa.id').where('torneioetapajogador.id', id).orderBy('torneioetapajogador.torneio_id').orderBy('torneioetapajogador.etapa_id')
}

async function setTorneio (data) {
  const torneio = await getTorneioNome(data.nome)
  if (torneio.length != 0)
    throw ('torneio já existe.')

  const _id = await db('torneio').insert(data)
  return await getTorneio(_id[0])
}

async function getTorneioRank (idtorneio, idetapa) {
  if (idtorneio === undefined || idetapa === undefined)
    throw ('Dados incorretos.')

  let jogadores = await db.select('torneioetapajogador.id', 'torneio.id as idtorneio', 'torneio.nome as nometorneio', 'etapa.id as idetapa', 'etapa.nome as nomeetapa', 'jogador.id as idjogador', 'jogador.nome as nomejogador', 'torneioetapajogador.score as score').from('torneioetapajogador').innerJoin('torneio', 'torneioetapajogador.torneio_id', '=', 'torneio.id').innerJoin('etapa', 'torneioetapajogador.etapa_id', '=', 'etapa.id').innerJoin('jogador', 'torneioetapajogador.jogador_id', '=', 'jogador.id').whereNotNull('torneioetapajogador.jogador_id').andWhere('torneioetapajogador.etapa_id', idetapa).andWhere('torneioetapajogador.torneio_id', idtorneio).orderBy('score')

  let i = 1
  await asyncForEach(jogadores, async (jogador) => {
    jogador.pontos = i
    i = i + 1
  })

  return jogadores
}

async function getTorneioRankGeral (idtorneio) {
  if (idtorneio === undefined)
    throw ('Dados incorretos.')

  let jogadores = []
  let jogadoresetapa

  const etapas = await db.select('etapa.id as idetapa').from('torneioetapajogador').innerJoin('torneio', 'torneioetapajogador.torneio_id', '=', 'torneio.id').innerJoin('etapa', 'torneioetapajogador.etapa_id', '=', 'etapa.id').whereNull('torneioetapajogador.jogador_id').where('torneioetapajogador.torneio_id', idtorneio).orderBy('torneioetapajogador.torneio_id').orderBy('torneioetapajogador.etapa_id')

  await asyncForEach(etapas, async (etapa) => {
    jogadoresetapa = await db.select('torneio.id as idtorneio', 'torneio.nome as nometorneio', 'jogador.id as idjogador', 'jogador.nome as nomejogador', 'torneioetapajogador.score as score').from('torneioetapajogador').innerJoin('torneio', 'torneioetapajogador.torneio_id', '=', 'torneio.id').innerJoin('etapa', 'torneioetapajogador.etapa_id', '=', 'etapa.id').innerJoin('jogador', 'torneioetapajogador.jogador_id', '=', 'jogador.id').whereNotNull('torneioetapajogador.jogador_id').andWhere('torneioetapajogador.etapa_id', etapa.idetapa).andWhere('torneioetapajogador.torneio_id', idtorneio).orderBy('score')

    let i = 1
    await asyncForEach(jogadoresetapa, async (jogador) => {
      jogador.pontos = i
      i = i + 1
      jogadores.push(jogador)
    })

  })

  let _jogador = []
  let idjogador = 0
  await asyncForEach(jogadores, async (jogadorfinal) => {
    if (idjogador != jogadorfinal.idjogador) {
      idjogador = jogadorfinal.idjogador
      _jogador.push({
        'idtorneio': jogadorfinal.idtorneio,
        'nometorneio': jogadorfinal.nometorneio,
        'idjogador': jogadorfinal.idjogador,
        'nomejogador': jogadorfinal.nomejogador,
        'pontosfinal': jogadorfinal.pontostotal = lodash.sumBy(lodash.filter(jogadores, { 'idjogador': idjogador }), x => x.pontos)
      })
    }
  })

  return lodash.uniqBy(_jogador, 'idjogador')
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
exports.getTorneioEtapa = getTorneioEtapa
exports.getTorneiosEtapas = getTorneiosEtapas
exports.getTorneioRank = getTorneioRank
exports.getTorneioRankGeral = getTorneioRankGeral