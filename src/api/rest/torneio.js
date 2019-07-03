const express = require('express')
const router = express.Router()
const basicAuth = require('../middlewares/basicAuth')

const { getTorneio, setTorneio } = require("../handlers/torneio")

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

module.exports = app => app.use('/api/v1/torneio', router)