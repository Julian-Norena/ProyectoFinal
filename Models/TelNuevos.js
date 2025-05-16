const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const cliente = require('./cliente');

const TelNuevos = sequelize.define('TelNuevos',{
    NumTelNuevo: {
        type: DataTypes.INTEGER,
        allowNull : false,
        unique: true,
        primaryKey: true
    },
    Activo: {
        type: DataTypes.STRING,
        allowNull:  false
    }
});

cliente.hasMany(TelNuevos,{foreignKey:'IdCliente'});
TelNuevos.belongsTo(cliente, {foreignKey: 'IdCliente'});

module.exports = TelNuevos;