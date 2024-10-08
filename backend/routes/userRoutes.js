const express = require('express');
const { getUsers, createUser } = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers);  // Rota para buscar todos os usuários
router.post('/', createUser);  // Rota para criar um novo usuário

module.exports = router;
