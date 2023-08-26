const Sequelize = require('sequelize'); // importei

const sequelize = new Sequelize("celke", "root", "", {
    host: 'localhost', 
    dialect: 'mysql'

}) // essa constante com o nome de sequelize terá conexão com o banco de dados.

// teste v

sequelize.authenticate()
.then(function(){
    console.log(`Conexão com banco de dados realizado com sucesso.`)
}).catch(function() {
     console.log(`ERRO: Conexão com banco de dados não realizado com sucesso.`)
});

// v continuação do programa

module.exports = sequelize

