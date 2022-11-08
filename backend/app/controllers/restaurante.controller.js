// Importar dependencias
const db = require("../models");
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');
const Restaurante = db.restaurantes;
const Op = db.Sequelize.Op;
// Crear un nuevo cliente
exports.create = (req, res) => {
    // Validar consulta
    console.log(req.body)
    if (!req.body.direccion) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Cliente
    const clientesa= {
        cant_mesas: req.body.cant_mesas,
        direccion: req.body.direccion,
    };
    // Guardar en base de datos
    Restaurante.create(clientesa)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Error al crear un nuevo cliente"
            });
        });
};
// Retornar todos los clientes de la base de datos.
exports.findAll = (req, res) => {
    const name = req.query.direccion;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Restaurante.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error en la búsqueda"
            });
        });
     
};
// Buscar un cliente por su id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Restaurante.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró al cliente.`
                });
             }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en la búsqueda"
            });
        });
};
// actualizar un cliente por su id
exports.update = (req, res) => {
    const id = req.params.id;
    Restaurante.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Cliente actualzado."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar al cliente`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en actualización"
            });
        });
};
// eliminar un cliente
exports.delete = (req, res) => {
    const id = req.params.id;
    Restaurante.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Cliente eliminado"
                });
            } else {
                res.send({
                    message: `Cliente no encontrado`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar cliente"
            });
        });
};
// eliminar a todos los clientes
exports.deleteAll = (req, res) => {
    Restaurante.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} clientes eliminados!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error al eliminar a todos los clientes."
            });
        });
};
