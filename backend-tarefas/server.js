const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/tarefas_db';

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API de Tarefas funcionando.' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'tarefas-api' });
});

app.use('/api/tasks', require('./routes/taskRoutes'));

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor de Tarefas rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error.message);
  });
