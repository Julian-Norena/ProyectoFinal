const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const cliente = sequelize.define('cliente', {
    IdCliente:{
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true
    },
    Nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Apellido: {
        type : DataTypes.STRING,
        allowNull: false
    },
    Direccion:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    Activo:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    NumActual:{
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    }
});

module.exports = cliente;