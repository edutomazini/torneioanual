const express = require('express');
const router = express.Router();

const { getJogador, setJogador } = require("../handlers/jogador")

router.get('/', async (req, res) => {
  const { id } = req.query
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

module.exports = app => app.use('/jogador', router);