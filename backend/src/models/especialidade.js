const mongoose = require('mongoose');

// Definição do esquema da Especialidade
const especialidadeSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
});

// Criação do modelo Especialidade com base no esquema definido
const Especialidade = mongoose.model('Especialidade', especialidadeSchema);

module.exports = Especialidade;
