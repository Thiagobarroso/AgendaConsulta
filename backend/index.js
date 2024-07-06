const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

//RECUPERAR TODOS OS REGISTROS
app.get('/', (req, res) => {
  res.json({ mensagem: 'PEGAR TODOS OS REGISTROS' });
});

//RECUPERAR TODOS OS REGISTROS COM ID
app.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `PEGAR TODOS OS REGISTROS COM ID ${id}` });
});

// CRIAR REGISTRO
app.post('/',   (req, res) => {
  const body = req.body;
  res.json({ mensagem: 'Criar usuário' });
});

//ATUALIZAR REGISTRO
app.put('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `ATUALIZAR SOMENTE O REGISTRO COM ID: ${id}` });
});

//DELETAR REGISTRO
app.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `ATUALIZAR SOMENTE O REGISTRO COM O ID: ${id}` });
});

app.listen(3000, () => {
  console.log('Servidor funcionando');
});
