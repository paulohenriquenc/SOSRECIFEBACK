const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar ao MongoDB
const dbURI = 'mongodb+srv://contatopaulohn:<68ISfW6CRHqdgLfw>@sosrecife.3lr2kni.mongodb.net/?retryWrites=true&w=majority&appName=SOSRecife';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.log('Erro ao conectar ao MongoDB:', err));

// Configuração do CORS
app.use(cors());

// Rotas
const userRoutes = require('../src/routes/Users');
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
