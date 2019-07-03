const express = require('express')
const router = express.Router()
const basicAuth = require('../middlewares/basicAuth')

const { getEtapa, setEtapa } = require("../handlers/etapa")

/**
 * @api {Get} /api/v1/etapa Consultar etapas
 * @apiVersion 0.0.1
 * @apiGroup etapa
 * @apiParam {Number} [id] querystring; id da etapa

 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 * [
 *  {
 *    "id": 9,
 *    "nome": "etapa 1",
 *    "created_at": "2019-07-03T05:39:36.000Z",
 *    "updated_at": "2019-07-03T05:39:36.000Z"
 *  }
 * ]
 * @apiErrorExample {json} Erro
 * HTTP/1.1 400 Falha ao consultar etapa.
**/

router.get('/', basicAuth, async (req, res) => {
  const { id } = req.query

  try {
    const etapa = await getEtapa(id)

    res.send(etapa)
  } catch (err) {
    console.log(err)
    return res.status(400).send({ erro: 'Falha ao consultar etapa. ' + err })
  }
});

/**
 * @api {Post} /api/v1/etapa Gravar etapas
 * @apiVersion 0.0.1
 * @apiGroup etapa
 * @apiParam {String} nome nome do etapa
 * @apiSuccessExample {json} Sucesso
 * HTTP/1.1 200 OK
 * [
 *  {
 *    "id": 9,
 *    "nome": "etapa 1",
 *    "created_at": "2019-07-03T05:39:36.000Z",
 *    "updated_at": "2019-07-03T05:39:36.000Z"
 *  }
 * ]
 * @apiErrorExample {json} Erro
 * HTTP/1.1 400 Falha ao gravar etapa.
**/
router.post('/', basicAuth, async (req, res) => {
  try {
    const result = await setEtapa(req.body)

    res.send(result)
  } catch (err) {
    console.log(err)
    return res.status(400).send({ erro: 'Falha ao gravar etapa. ' + err })
  }
})

module.exports = app => app.use('/api/v1/etapa', router);