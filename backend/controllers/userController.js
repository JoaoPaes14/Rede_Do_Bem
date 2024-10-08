const User = require('../models/userModel');

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuários' });
  }
  try {
    const users = await User.findByPk(id);
    res.json(users);
  }catch (error){
    res.status(404).json({mensage: 'Usuario não encontrado'})
  }
};
const createUser = async (req, res) => {
  const { name, email, password , id } = req.body;

  if (!name || !email || !password || !id ) {
    return res.status(400).json({ message: 'Por favor, preencha todos os campos' });
  }

  try {
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }

    const newUser = await User.create({ name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar usuário' });
  }
};

module.exports = { getUsers, createUser };
