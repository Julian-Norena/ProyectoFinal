const express = require('express');
const bodyParser = require('body-parser');
const cliente = require('./Models/cliente');
const TelNuevos = require('./Models/TelNuevos');
const Cambios = require('./Models/Cambios');
const traslados = require('./Models/traslados');
const sequelize = require('./database');

const app = express();

app.use(bodyParser.json());

sequelize.sync()
    .then(() => console.log('Base de datos sincronizada'))
    .catch(err => console.error('Error de sincronizacion', err));

app.post('/cliente', async(req,res) =>{
    const {IdCliente,Nombre,Apellido,Direccion,Activo,NumActual} = req.body;

    try{
        const NuevoCliente = await cliente.create({IdCliente, Nombre, Apellido, Direccion, Activo, NumActual});
        res.status(200).json(NuevoCliente);
    } catch (error){
        res.status(400).json({error: error.message});
    }
});

app.post('/TelNuevos', async(req,res) =>{
    const {NumTelNuevo,Activo, IdCliente} = req.body;

    try{
        const NuevoTelNuevo = await TelNuevos.create({NumTelNuevo, Activo, IdCliente});
        res.status(200).json(NuevoTelNuevo);
    } catch (error){
        res.status(400).json({error: error.message });
    }
});

app.post('/Cambios', async(req,res) =>{
    const {IdCambios,NuTel, TelAn, NuTelActivo, IdCliente} = req.body;

    try{
        const NuevoCambio = await Cambios.create({IdCambios, NuTel, TelAn, NuTelActivo, IdCliente});
        res.status(200).json(NuevoCambio);
    } catch (error){
        res.status(400).json({error: error.message });
    }
});

app.post('/traslados', async(req,res) =>{
    const {NumeroATrasladar, Entrada_Salida, OperadorOrigen, OperadorDestino, IdConfirmacion, TelActivo, IdCliente} = req.body;

    try{
        const NuevoTraslado = await traslados.create({NumeroATrasladar, Entrada_Salida, OperadorOrigen, OperadorDestino, IdConfirmacion, TelActivo,IdCliente});
        res.status(200).json(NuevoTraslado);
    } catch (error){
        res.status(400).json({error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo por el puerto 3000');
});