const express = require('express');
const router = express.Router();

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
 * HTTP/1.1 400 Falha ao consultar compras.
**/

router.get('/', async (req, res) => {
  const { id } =  req.query

  try {
    const jogador = await getJogador(id)

    res.send(jogador)
  } catch (err) {
    console.log(err)
    return res.status(400).send({ erro: 'Falha ao consultar jogador' });
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await setJogador(req.body)

    res.send(result)
  } catch (err) {
    console.log(err)
    return res.status(400).send({ erro: 'Falha ao gravar jogador' });
  }
})

module.exports = app => app.use('/api/v1/jogador', router);