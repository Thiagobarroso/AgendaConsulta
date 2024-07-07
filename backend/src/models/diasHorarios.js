const mongoose = require('mongoose');

const DiasHorarios = mongoose.model('DiasHorarios', {
  Medico_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Medico',
  },
  diaAtendimento: Date,
  horaInicio: String,
  horaFim: String,
});

module.exports = DiasHorarios;
