const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const routes = require('./src/routes/especialidade.routes');
const usuarioRoutes = require('./src/routes/usuarios.routes');

mongoose
  .connect('mongodb://127.0.0.1:27017/agendaConsulta', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');

    /// MIDDLEWARES
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(cors());

    /// ROUTES
    app.use('/', routes);
    app.use('/usuario', usuarioRoutes);

    app.listen(3000, () => {
      console.log('Servidor funcionando na porta 3000');
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err.message);
  });
