// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Rota de Registro de Usuário
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).send('Usuário registrado com sucesso!');
  } catch (err) {
    res.status(500).send('Erro ao registrar usuário: ' + err.message);
  }
});

module.exports = router;
