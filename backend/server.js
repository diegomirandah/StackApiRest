//Importar dependencias
const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const Role = db.role;

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

const app = express();

// filtrar origenes
var corsOptions = {
  origin: "http://localhost:3000"
};

//configuración de cors (control de acceso)
app.use(cors(corsOptions))
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
db.sequelize.sync({force: true}).then(() => {
    console.log("Drop and re-sync db.");
    initial();
});

// Agregar rutas al backend
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// estas rutas no tienen seguridad
require("./app/routes/client.routes")(app);
require("./app/routes/category.routes")(app);
require("./app/routes/product.routes")(app);
require("./app/routes/sale.routes")(app);


// ruta simple
app.get("/", (req, res) => {
  res.json({ message: "Server is running." });
});
// Configurar puertos
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
