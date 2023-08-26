const Sequelize = require('sequelize');
const db = require('./db');

// constante que será exportada sempre que precisar manipular algum usuário.

const User = db.define('users', {
   // v Banco que ele vai criar na no workbench
    id: {
    type: Sequelize .INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
   },

   name: {
      type: Sequelize.STRING,
      allowNull: false,


   },  // < colona name permite que o usuário envie os dados em formato de texto.

   email: {
       type: Sequelize.STRING,
       allowNull: false,
   }

});

// User.sync() // < com esse comando, se a tabela não existir ela será criada. (nesse caso vou comentar a instrução pois, ela já criou minha tabela.)

// User.sync({ alter: true} ) // < Verifica se há alguma diferença na tabela, e então realiza a alteração.

// V exportei a constante "User" pois ela tem a models completa. 

module.exports = User;