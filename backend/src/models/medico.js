const mongoose = require('mongoose');

const Medico = mongoose.model('Medico', {
  especialidade_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Especialidade',
  },
  nome: String,
});

module.exports = Medico;
