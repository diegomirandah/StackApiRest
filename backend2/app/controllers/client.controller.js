// Importar dependencias
const ClientModel = require('../models/client.model');
// Crear un nuevo cliente
exports.create = (req, res) => {
    const client = new ClientModel({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
    })

    try {
        const clientToSave = client.save();
        res.status(200).json(clientToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
};
// Retornar todos los clientes de la base de datos.
exports.findAll = (req, res) => {
    res.send('findAll CLIENT')
};
// Buscar un cliente por su id
exports.findOne = (req, res) => {
    res.send('findOne CLIENT')
};
// actualizar un cliente por su id
exports.update = (req, res) => {
    res.send('update CLIENT')
};
// eliminar un cliente
exports.delete = (req, res) => {
    res.send('delete CLIENT')
};
// eliminar a todos los clientes
exports.deleteAll = (req, res) => {
    res.send('deleteAll CLIENT')
};
