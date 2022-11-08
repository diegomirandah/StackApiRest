// Importar dependencias
const db = require("../models");
const Reservas = db.reservas;
const Cliente = db.clientes;
const Restaurante = db.restaurantes;
const Op = db.Sequelize.Op;
// Crear un nuevo cliente
exports.create = (req, res) => {
    // Validar consulta
    Cliente.findByPk(req.body.clienteId)
        .then(cliente=>{
            if(cliente){
                Restaurante.findByPk(req.body.restauranteId)
                    .then(restaurante=>{
                        if(restaurante){
                            Reservas.create({
                                fecha: req.body.fecha,
                                cant_persona: req.body.cant_persona,
                                disp: req.body.disp,
                                clienteId: cliente.id,
                                restauranteId: restaurante.id,
                            })
                            .then(reserva=>{
                                res.send(reserva);
                            })
                            .catch(err=>{
                                res.status(500).send({
                                    message: err.message || "Error al crear reserva"
                                });
                            });
                        }else{
                            res.status(404).send({
                                message: `No se encontró el restaurante.`
                            });
                        }
                    })
                    .catch(err=>{
                        res.status(500).send({
                            message: "Error en la búsqueda"
                        });
                    });
            }else{
                res.status(404).send({
                    message: `No se encontró el cliente.`
                });
            }
        })
};
// Retornar todos los clientes de la base de datos.
exports.findAll = (req, res) => {
    const name = req.query.id;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Reservas.findAll({ where: condition ,include: [Cliente,Restaurante]})
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
    Reservas.findByPk(id)
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
    Reservas.update(req.body, {
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
    Reservas.destroy({
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
    Reservas.destroy({
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
