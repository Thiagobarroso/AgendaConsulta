const Medico = require('../models/medico');
const Especialidade = require('../models/especialidade');

router.post('medico', async (req, res) => {
  const { nome, Especialidade_id } = req.body;

  try {
    //verifica se a especidalidade existe, antes de criar o médico
    const especialidadeExiste = await Especialidade.findById(especialidade_id);
    if (!especialidadeExiste) {
      return res
        .status(404)
        .json({ error: true, message: 'Especidade não encontrada' });
    }

    const novoMedico = new Medico({ nome, especialidade_id });
    const medicoSalvo = await novoMedico.save();

    res.json({
      error: false,
      message: 'Médico criado com sucesso',
      medico: medicoSalvo,
    });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});
