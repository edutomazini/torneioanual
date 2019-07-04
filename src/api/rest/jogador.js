const express = require('express')
const router = express.Router()
const basicAuth = require('../middlewares/basicAuth')

const { getJogador, setJogador, setJogadortorneio, getJogadorScore } = require("../handlers/jogador")

/**
 * @api {Get} /api/v1/jogador Consultar Jogadores
 * @apiVersion 0.0.1
 * @apiGroup Jogador
 * @apiParam {Number} [id] querystring; id do jogador

 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 * [
 *  {
 *    "id": 9,
 *    "nome": "juca",
 *    "cpf": "11578855111"
 *  }
 * ]
 * @apiErrorExample {json} Erro
 * HTTP/1.1 400 Falha ao consultar jogador.
**/

router.get('/', basicAuth, async (req, res) => {
  const { id } = req.query

  try {
    const jogador = await getJogador(id)

    res.send(jogador)
  } catch (err) {
    console.log(err)
    return res.status(400).send({ erro: 'Falha ao consultar jogador. ' + err })
  }
})

/**
 * @api {Post} /api/v1/jogador Gravar Jogadores
 * @apiVersion 0.0.1
 * @apiGroup Jogador
 * @apiParam {String} nome nome do jogador
 * @apiParam {String} cpf cpf do jogador

 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 * [
 *  {
 *    "id": 9,
 *    "nome": "juca",
 *    "cpf": "11578855111"
 *  }
 * ]
 * @apiErrorExample {json} Erro
 * HTTP/1.1 400 Falha ao gravar jogador.
**/
router.post('/', basicAuth, async (req, res) => {
  try {
    const result = await setJogador(req.body)

    res.send(result)
  } catch (err) {
    console.log(err)
    return res.status(400).send({ erro: 'Falha ao gravar jogador. ' + err })
  }
})

/**
 * @api {Post} /api/v1/jogador/torneio/ Gravar Score Jogador
 * @apiVersion 0.0.1
 * @apiGroup Jogador
 * @apiParam {Number} idjogador id do jogador
 * @apiParam {Number} idetorneio id do torneio
 * @apiParam {Number} idetapa id da etapa
 * @apiParam {Number} score score da etapa (será somado ao score já existente)
 * 
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 * [
 *  {
 *    "id": 11,
 *    "idtorneio": 1,
 *    "nometorneio": "torneio mensal",
 *    "idetapa": 1,
 *    "nomeetapa": "etapa 3",
 *    "idjogador": 1,
 *    "nomejogador": "juca2",
 *    "score": 2
 *  }
 * ]
 * @apiErrorExample {json} Erro
 * HTTP/1.1 400 Falha ao gravar score.
**/
router.post('/torneio', basicAuth, async (req, res) => {
  try {
    const result = await setJogadortorneio(req.body)

    res.send(result)
  } catch (err) {
    console.log(err)
    return res.status(400).send({ erro: 'Falha ao gravar score. ' + err })
  }
})

/**
 * @api {Get} /api/v1/jogador/torneio/ Retorna Score Jogador em um torneio / etapa
 * @apiVersion 0.0.1
 * @apiGroup Jogador
 * @apiParam {Number} idjogador id do jogador
 * @apiParam {Number} idtorneio id do torneio
 * @apiParam {Number} idetapa id da etapa
 * 
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 * [
 *  {
 *    "id": 11,
 *    "idtorneio": 1,
 *    "nometorneio": "torneio mensal",
 *    "idetapa": 1,
 *    "nomeetapa": "etapa 3",
 *    "idjogador": 1,
 *    "nomejogador": "juca2",
 *    "score": 2
 *  }
 * ]
 * @apiErrorExample {json} Erro
 * HTTP/1.1 400 Falha ao retornar score.
**/
router.get('/torneio', basicAuth, async (req, res) => {
  try {
    const {idtorneio, idetapa, idjogador} = req.body
    const result = await getJogadorScore(idtorneio, idetapa, idjogador)

    res.send(result)
  } catch (err) {
    console.log(err)
    return res.status(400).send({ erro: 'Falha ao retornar score. ' + err })
  }
})

module.exports = app => app.use('/api/v1/jogador', router)