//Importar dependencias
const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const app = express();
//configuración de cors (control de acceso)
app.use(cors())
// analizar las solicitudes de tipo de contenido - application/json
app.use(express.json());
// analizar las solicitudes de tipo de contenido - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// en producción
/*db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });*/
// en desarrollo
db.sequelize.sync({ alter: true }).then(() => {
    console.log("Drop and re-sync db.");
});

// Agregar rutas al backend

require("./app/routes/cliente.routes")(app);
require("./app/routes/restaurante.routes")(app);
require("./app/routes/login.routes")(app);
require("./app/routes/admin.routes")(app);
require("./app/routes/reserva.routes")(app);
require("./app/routes/mesa.routes")(app);

// ruta simple
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
// Configurar puertos
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
