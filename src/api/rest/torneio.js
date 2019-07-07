const express = require('express')
const router = express.Router()
const basicAuth = require('../middlewares/basicAuth')

const { getTorneio, getTorneiosEtapas, setTorneio, setTorneioEtapa, getTorneioRank, getTorneioRankGeral } = require("../handlers/torneio")

/**
 * @api {Get} /api/v1/torneio/:idtorneio/etapa/:idetapa Consultar rank (pontos) de torneios / etapas
 * @apiVersion 0.0.1
 * @apiGroup torneio
 * @apiParam {Number} idtorneio id do torneio
 * @apiParam {Number} idetapa id da etapa
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 * [
 *    {
 *      "id": 14,
 *      "idtorneio": 1,
 *      "nometorneio": "torneio mensal",
 *      "idetapa": 1,
 *      "nomeetapa": "etapa 1",
 *      "idjogador": 2,
 *      "nomejogador": "eduardo",
 *      "score": 10,
 *      "pontos": 1
 *    },
 *    {
 *      "id": 11,
 *      "idtorneio": 1,
 *      "nometorneio": "torneio mensal",
 *      "idetapa": 1,
 *      "nomeetapa": "etapa 1",
 *      "idjogador": 1,
 *      "nomejogador": "juca",
 *      "score": 12,
 *      "pontos": 2
 *  }
 * ]
 * @apiErrorExample {json} Erro
 * HTTP/1.1 400 Falha ao consultar torneio.
**/

router.get('/:idtorneio/etapa/:idetapa', basicAuth, async (req, res) => {
  const { idtorneio, idetapa } = req.params
  
  try {
    const torneio = await getTorneioRank(idtorneio, idetapa)

    res.send(torneio)
  } catch (err) {
    console.log(err)
    return res.status(400).send({ erro: 'Falha ao consultar pontos. ' + err })
  }
})

/**
 * @api {Get} /api/v1/torneio/:idtorneio Consultar rank (pontos gerais) de torneio 
 * @apiVersion 0.0.1
 * @apiGroup torneio
 * @apiParam {Number} idtorneio id do torneio
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 * [
 *   {
 *     "idtorneio": 1,
 *     "nometorneio": "torneio mensal",
 *     "idjogador": 2,
 *     "nomejogador": "eduardo",
 *     "pontosfinal": 1
 *   },
 *   {
 *     "idtorneio": 1,
 *     "nometorneio": "torneio mensal",
 *     "idjogador": 1,
 *     "nomejogador": "juca",
 *     "pontosfinal": 2
 *   }
 * ]
 * @apiErrorExample {json} Erro
 * HTTP/1.1 400 Falha ao consultar torneio.
**/

router.get('/rank/:idtorneio/', basicAuth, async (req, res) => {
  const { idtorneio } = req.params

  try {
    const torneio = await getTorneioRankGeral(idtorneio)

    res.send(torneio)
  } catch (err) {
    console.log(err)
    return res.status(400).send({ erro: 'Falha ao consultar pontos. ' + err })
  }
})

/**
 * @api {Get} /api/v1/torneio Consultar torneios
 * @apiVersion 0.0.1
 * @apiGroup torneio
 * @apiParam {Number} [id] querystring; id do torneio

 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 * [
 *  {
 *    "id": 9,
 *    "nome": "torneio anual",
 *    "created_at": "2019-07-03T05:39:36.000Z",
 *    "updated_at": "2019-07-03T05:39:36.000Z"
 *  }
 * ]
 * @apiErrorExample {json} Erro
 * HTTP/1.1 400 Falha ao consultar torneio.
**/

router.get('/', basicAuth, async (req, res) => {
  const { id } = req.query

  try {
    const torneio = await getTorneio(id)

    res.send(torneio)
  } catch (err) {
    console.log(err)
    return res.status(400).send({ erro: 'Falha ao consultar torneio. ' + err })
  }
})

/**
 * @api {Get} /api/v1/torneio/torneiosetapas Consultar todos torneios e etapas
 * @apiVersion 0.0.1
 * @apiGroup torneio

 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 * [
 *  {
 *    "id": 7,
 *    "idtorneio": 1,
 *    "nometorneio": "torneio mensal",
 *    "idetapa": 1,
 *    "nomeetapa": "etapa 3"
 *  },
 *  {
 *    "id": 8,
 *    "idtorneio": 2,
 *    "nometorneio": "torneio semanal",
 *    "idetapa": 1,
 *    "nomeetapa": "etapa 3"
 *  },
 *  {
 *    "id": 9,
 *    "idtorneio": 2,
 *    "nometorneio": "torneio semanal",
 *    "idetapa": 2,
 *    "nomeetapa": "etapa 1"
 *  },
 *  {
 *    "id": 10,
 *    "idtorneio": 2,
 *    "nometorneio": "torneio semanal",
 *    "idetapa": 3,
 *    "nomeetapa": "etapa 2"
 *  }
 * ]
 * @apiErrorExample {json} Erro
 * HTTP/1.1 400 Falha ao consultar torneio.
**/

router.get('/torneiosetapas', basicAuth, async (req, res) => {

  try {
    const torneio = await getTorneiosEtapas()

    res.send(torneio)
  } catch (err) {
    console.log(err)
    return res.status(400).send({ erro: 'Falha ao consultar torneio. ' + err })
  }
})

/**
 * @api {Post} /api/v1/torneio Gravar torneios
 * @apiVersion 0.0.1
 * @apiGroup torneio
 * @apiParam {String} nome nome do torneio
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 * [
 *  {
 *    "id": 9,
 *    "nome": "torneio anual",
 *    "created_at": "2019-07-03T05:39:36.000Z",
 *    "updated_at": "2019-07-03T05:39:36.000Z"
 *  }
 * ]
 * @apiErrorExample {json} Erro
 * HTTP/1.1 400 Falha ao gravar torneio.
**/
router.post('/', basicAuth, async (req, res) => {
  try {
    const result = await setTorneio(req.body)

    res.send(result)
  } catch (err) {
    console.log(err)
    return res.status(400).send({ erro: 'Falha ao gravar torneio. ' + err })
  }
})

/**
 * @api {Post} /api/v1/torneio/:idtorneio/etapa/:idetapa Associar torneios e etapas
 * @apiVersion 0.0.1
 * @apiGroup torneio
 * @apiParam {Number} idtorneio id do torneio
 * @apiParam {Number} idetapa id da etapa
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 * [
 *  {
 *    "idtorneio": 1,
 *    "nometorneio": "torneio mensal",
 *    "idetapa": 1,
 *    "nomeetapa": "etapa 3"
 *  }
 * ]
 * @apiErrorExample {json} Erro
 * HTTP/1.1 400 Falha ao gravar torneio etapa.
**/
router.post('/:idtorneio/etapa/:idetapa', basicAuth, async (req, res) => {
  const { idtorneio, idetapa } = req.params
  try {
    const result = await setTorneioEtapa(idtorneio, idetapa)

    res.send(result)
  } catch (err) {
    console.log(err)
    return res.status(400).send({ erro: 'Falha ao gravar torneio. ' + err })
  }
})

module.exports = app => app.use('/api/v1/torneio', router)