const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Verifica se tanto o e-mail quanto a senha foram fornecidos
    if (!email || !senha) {
      return res
        .status(400)
        .json({ error: true, message: 'E-mail e senha são obrigatórios' });
    }

    // Procura pelo usuário com base no e-mail
    const usuario = await Usuario.findOne({ email });

    // Verifica se o usuário existe e se a senha está correta
    if (!usuario || usuario.senha !== senha) {
      return res.json({ error: true, message: 'Credenciais inválidas' });
    }

    // Se tudo estiver correto, retorna sucesso e os dados do usuário
    res.json({ error: false, message: 'Login bem-sucedido', usuario });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});

module.exports = router;
