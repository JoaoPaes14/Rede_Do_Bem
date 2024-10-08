const express = require('express');
const dotenv = require('dotenv');
const { connectDB, sequelize } = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const User = require('./models/userModel');

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

sequelize.sync({ force: false })  
  .then(() => {
    console.log('Tabelas sincronizadas com o banco de dados');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar tabelas:', error);
  });

app.use('/api/users', userRoutes); 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
