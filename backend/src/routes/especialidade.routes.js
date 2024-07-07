const express = require('express');
const router = express.Router();
const Especialidade = require('../models/especialidade');

//RECUPERAR TODOS OS REGISTROS
router.get('/', (req, res) => {
  res.json({ mensagem: 'PEGAR TODOS OS REGISTROS' });
});

//RECUPERAR TODOS OS REGISTROS COM ID
router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `PEGAR TODOS OS REGISTROS COM ID ${id}` });
});

// CRIAR REGISTRO
router.post('/', async (req, res) => {
  try {
    const especialidade = req.body;
    const response = await new Especialidade(especialidade).save();
    res.json({ error: false, especialidade: response });
  } catch (err) {
    res.json({ error: true, massage: err.message });
  }
});

//ATUALIZAR REGISTRO
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const novaEspecialidade = req.body;

    const especialidade = await Especialidade.findByIdAndUpdate(
      id,
      novaEspecialidade,
    );
    res.json({ error: true, message: err.mensagem });
  } catch (err) {
    res.json({ error: true, mensage: err.mensage });
  }
});

//DELETAR REGISTRO
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `ATUALIZAR SOMENTE O REGISTRO COM O ID: ${id}` });
});

module.exports = router;
