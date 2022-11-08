// Importar dependencias
const db = require("../models");
const Mesa = db.mesas;
const Reserva = db.reservas;
const Op = db.Sequelize.Op;
 
exports.create = (req, res) => {
    console.log(req.body)
    if (!req.body.ambiente) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    Reserva.findByPk(req.body.reservaId)
        .then(reserva => {
            if (reserva) {
                // categoria existe
                Mesa.create({
                        ambiente: req.body.ambiente,
                        cant_mesa_reserva: req.body.cant_mesa_reserva,
                        reservaId: reserva.id
                    },{
                        include:[Reserva]
                    })
                    .then(product => {
                        res.send(product);
                    })
                    .catch(err => {
                        res.status(500).send({
                        message:
                            err.message || "Error al crear un producto"
                        });
                    });
            } else {
                res.status(404).send({
                    message: `No se encontró la categoria.`
                });
             }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en la búsqueda"
            });
        });
};
exports.findAll = (req, res) => {
    const name = req.query.id;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Mesa.findAll({
            where: condition,
            include: Reserva
        })
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
exports.findOne = (req, res) => {
    const id = req.params.id;
    Mesa.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró el producto.`
                });
             }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en la búsqueda"
            });
        });
};
exports.update = (req, res) => {
    const id = req.params.id;
    Mesa.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Mesao actualzado."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el producto`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en actualización"
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;
    Mesa.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Mesao eliminado"
                });
            } else {
                res.send({
                    message: `Mesao no encontrado`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar el producto"
            });
        });
};
exports.deleteAll = (req, res) => {
    Mesa.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Mesaos eliminados!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error al eliminar todos los productos."
            });
        });
};
