// Importar dependencias
const ClientModel = require('../models/client.model');
// Crear un nuevo cliente
exports.create = (req, res) => {
    // Agregar validaciones

    // 
    const client = new ClientModel({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
    })
    client.save()
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
};
// Retornar todos los clientes de la base de datos.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

    ClientModel.find(condition)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
};
// Buscar un cliente por su id
exports.findId = (req, res) => {
    const id = req.params.id;
    ClientModel.findById(id)
        .then(data => {
            if (!data){
                res.status(404).send({ message: "No se encontro cliente con el id " + id });
            }else{
                res.status(200).json(data)
            }
        })
        .catch(err => {
            res.status(500).json({message: "Error al buscar cliente"})
        })
};
// actualizar un cliente por su id
exports.update = (req, res) => {
    // Agregar validaciones

    // 
    const id = req.params.id;
    ClientModel.findByIdAndUpdate(id, req.body,{ useFindAndModify: false })
        .then(data => {
            if (!data){
                res.status(404).send({ message: "No se encontro cliente con el id " + id });
            }else{
                res.status(200).json({message: "Cliente actualizado"})
            }
        })
        .catch(err => {
            res.status(500).json({message: "Error al buscar cliente"})
        })
};
// eliminar un cliente
exports.delete = (req, res) => {
    const id = req.params.id;
    ClientModel.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "No se encontro cliente con el id " + id });
            } else {
                res.status(200).send({ message: "cliente eliminado"})
            }
        })
        .catch(err => {
            res.status(500).json({message: "Error al buscar cliente"})
        })
};
// eliminar a todos los clientes
exports.deleteAll = (req, res) => {
    ClientModel.deleteMany({})
        .then(data => {
            res.status(200).send({ message: `${data.deletedCount} clientes eliminados`})
        })
        .catch(err => {
            res.status(500).json({message: "Error"})
        })
};
