const mongoose = require('mongoose');

const medicoSchema = new mongoose.Schema({
  especialidade_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Especialidade',
    require: true,
  },
  nome: {
    type: String,
    require: true,
  },
});

const Medico = mongoose.model('Medico', medicoSchema);

module.exports = Medico;
