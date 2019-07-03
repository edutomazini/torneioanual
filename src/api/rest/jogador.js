const express = require('express')
const router = express.Router()
const basicAuth = require('../middlewares/basicAuth')

const { getJogador, setJogador } = require("../handlers/jogador")

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
});

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

module.exports = app => app.use('/api/v1/jogador', router)