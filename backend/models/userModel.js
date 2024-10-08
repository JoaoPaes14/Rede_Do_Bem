const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');


const User = sequelize.define('User', {
  id:{
    type: DataTypes.NUMBER,
    allowNull: true,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'users',
  timestamps: true 
});

module.exports = User;
