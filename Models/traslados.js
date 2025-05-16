const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const cliente = require('./cliente');

const traslados = sequelize.define('traslados',{
    NumeroATrasladar: {
        type: DataTypes.INTEGER,
        allowNull : false,
        unique: true,
        primaryKey: true
    },
    Entrada_Salida: {
        type: DataTypes.STRING,
        allowNull:  false
    },
    OperadorOrigen:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    OperadorDestino:{
        type: DataTypes.STRING,
        allowNull: false
    },
    IdConfirmacion:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    TelActivo:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

cliente.hasMany(traslados,{foreignKey:'IdCliente'});
traslados.belongsTo(cliente, {foreignKey: 'IdCliente'});

module.exports = traslados;