const db = require('../../config/database')
const { getEtapa } = require("../handlers/etapa")
const { getTorneio } = require("../handlers/torneio")

async function getJogador (id) {
  return new Promise(async (resolve, reject) => {
    try {
      const jogador = db.select('*').from('jogador').modify(function (queryBuilder) {
        if (id !== undefined) {
          queryBuilder.where('id', id)
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

async function setJogadortorneio (data) {
  if (data.idjogador === undefined || data.idtorneio === undefined || data.idetapa === undefined)
    throw ('Dados incorretos.')

  const jogador = await getJogador(data.idjogador)
  if (jogador.length == 0)
    throw ('Jogador nao existe.')

  const torneio = await getTorneio(data.idtorneio)
  if (torneio.length == 0)
    throw ('torneio nao existe.')

  const etapa = await getEtapa(data.idetapa)
  if (etapa.length == 0)
    throw ('etapa nao existe.')

  const score = (data.score === undefined ? 0 : data.score)

  await setScoreJogador(data.idtorneio, data.idetapa, data.idjogador, score)

  return await getJogadorScore(data.idtorneio, data.idetapa, data.idjogador)
}

async function getJogadorCpf (cpf) {
  return await db.select('*').from('jogador').where('cpf', cpf)
}

async function setJogador (data) {
  const jogador = await getJogadorCpf(data.cpf)
  if (jogador.length != 0)
    throw ('cpf já existe.')

  const _id = await db('jogador').insert(data)
  return await getJogador(_id[0])
}

async function setScoreJogador (idtorneio, idetapa, idjogador, score) {
  const jogadorScore = await getJogadorScore(idtorneio, idetapa, idjogador)
  if (jogadorScore.length == 0)
    await db('torneioetapajogador').insert({
      torneio_id: idtorneio,
      etapa_id: idetapa,
      jogador_id: idjogador,
      score: score
    })
  else
    await db('torneioetapajogador').update({
      torneio_id: idtorneio,
      etapa_id: idetapa,
      jogador_id: idjogador
    }).where('torneio_id', idtorneio).andWhere('etapa_id', idetapa).andWhere('jogador_id', idjogador).increment('score', score)
}

async function getJogadorScore (idtorneio, idetapa, idjogador) {
  if (idtorneio === undefined || idetapa === undefined || idjogador === undefined)
    throw ('Dados incorretos.')

  return await db.select('torneioetapajogador.id', 'torneio.id as idtorneio', 'torneio.nome as nometorneio', 'etapa.id as idetapa', 'etapa.nome as nomeetapa', 'jogador.id as idjogador', 'jogador.nome as nomejogador', 'torneioetapajogador.score as score').from('torneioetapajogador').innerJoin('torneio', 'torneioetapajogador.torneio_id', '=', 'torneio.id').innerJoin('etapa', 'torneioetapajogador.etapa_id', '=', 'etapa.id').innerJoin('jogador', 'torneioetapajogador.jogador_id', '=', 'jogador.id').where('torneioetapajogador.jogador_id', idjogador).andWhere('torneioetapajogador.etapa_id', idetapa).andWhere('torneioetapajogador.torneio_id', idtorneio)
}

exports.getJogador = getJogador
exports.setJogador = setJogador
exports.setJogadortorneio = setJogadortorneio
exports.getJogadorScore = getJogadorScore