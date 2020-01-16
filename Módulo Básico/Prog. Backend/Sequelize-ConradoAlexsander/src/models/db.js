const Sequelize = require('sequelize');


//Bloco de conexão sequelize com o PostGreeSQL

const sequelize = new Sequelize('posts', 'postgres', '21121993', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
}