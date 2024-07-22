const express = require('express');
const router = express.Router();
const Especialidade = require('../models/especialidade'); // Importe o modelo de especialidade adequado

// Rota para criar uma nova especialidade
router.post('/especialidade', async (req, res) => {
  try {
    const { nome } = req.body;

    if (!nome) {
      return res.status(400).json({
        error: true,
        message: 'O nome da especialidade é obrigatório',
      });
    }

    const novaEspecialidade = new Especialidade({ nome });

    const especialidadeSalva = await novaEspecialidade.save();

    res.json({
      error: false,
      message: 'Especialidade criada com sucesso',
      especialidade: especialidadeSalva,
    });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});

// Rota para buscar todas as especialidades
router.get('/especialidades', async (req, res) => {
  try {
    const especialidades = await Especialidade.find({}, 'nome');
    res.json(especialidades);
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});

// Rota para remover uma especialidade pelo ID
router.delete('/especialidade/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Verifica se o ID fornecido é válido
    if (!id) {
      return res.status(400).json({
        error: true,
        message: 'ID da especialidade não fornecido',
      });
    }

    // Procura e remove a especialidade pelo ID
    const especialidadeRemovida = await Especialidade.findByIdAndDelete(id);

    if (!especialidadeRemovida) {
      return res.status(404).json({
        error: true,
        message: 'Especialidade não encontrada',
      });
    }

    res.json({
      error: false,
      message: 'Especialidade removida com sucesso',
      especialidade: especialidadeRemovida,
    });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});

module.exports = router;
