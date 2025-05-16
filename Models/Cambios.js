const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const cliente = require('./cliente');

const Cambios = sequelize.define('Cambios',{
    IdCambios: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    NuTel: {
        type: DataTypes.INTEGER,
        allowNull:  false
    },
    TelAn:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    NuTelActivo:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

cliente.hasMany(Cambios,{foreignKey:'IdCliente'});
Cambios.belongsTo(cliente, {foreignKey: 'IdCliente'});

module.exports = Cambios;