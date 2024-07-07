const mongoose = require('mongoose');

const Agendamento = mongoose.model('Agendamento', {
  Medico_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Medico',
  },
  Especialidade_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Especialidade',
  },
  DiasHorarios: {
    type: mongoose.Types.ObjectId,
    ref: 'DiasHorarios',
  },
  nomeCompleto: String,
  telefone: String,
  email: String,
});

module.exports = Agendamento;
