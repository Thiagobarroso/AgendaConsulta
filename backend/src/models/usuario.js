const mongoose = require('mongoose');

const Usuario = mongoose.model('Usuario', {
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
});

module.exports = Usuario;
