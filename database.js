const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('proyectoFinal','root','' , {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = sequelize;