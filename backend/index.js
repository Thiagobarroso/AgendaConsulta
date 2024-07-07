const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Importe o mongoose apenas uma vez
const app = express();

const routes = require('./src/routes/especialidade.routes');

mongoose
  .connect('mongodb://127.0.0.1:27017/agendaConsulta', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');

    // Configuração do servidor após a conexão com o banco de dados
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use('/', routes);

    app.listen(3000, () => {
      console.log('Servidor funcionando na porta 3000');
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err.message);
  });
