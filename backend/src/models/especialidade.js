const mongoose = require('mongoose');

const Especialidade = mongoose.model('Especialidade', {
  nome: {
    type: String,
    required: true,
  },
});

module.exports = Especialidade;
