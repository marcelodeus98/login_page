const {Sequelize} = require('sequelize');

// database_name, user , password
const sequelize = new Sequelize('dbuser', 'root' , 'js220315', {
    host: 'localhost', // localhost => minha máquina
    dialect: 'mysql' //linguagem do sql
});

//Dev
// Verificando conexão  com o banco
sequelize.authenticate().then(() => {
    console.log('Conexão realizada com sucesso!')
}).catch(() => {
    console.log('Error: conexão falhou!')
}
)

module.exports = sequelize