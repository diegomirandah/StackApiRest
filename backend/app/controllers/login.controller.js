// Importar dependencias
const db = require("../models");
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');
const Clientes = db.clientes;
const Op = db.Sequelize.Op;
// Crear un nuevo cliente
exports.singIn = (req, res) => {
    let {correo, password} = req.body;
    Clientes.findOne({where: {correo: correo}})
    .then(clientes => {
        if (clientes) {
            if (bcrypt.compareSync(password, clientes.password)) {
                res.status(200).send({
                    message: "Bienvenido",
                    data: clientes
                });
            } else {
                res.status(401).send({
                    message: "Contraseña incorrecta"
                });
            }
        } else {
            res.status(404).send({
                message: "Correo no registrado"
            });
        }
    })
}