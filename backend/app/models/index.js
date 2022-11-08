// Importe de dependencias
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
// Inicialización de Sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// Importa modelos a Sequelize
db.clientes = require("./clientes.model.js")(sequelize, Sequelize);
db.reservas = require("./reservas.model.js")(sequelize, Sequelize);
db.restaurantes = require("./restaurantes.model.js")(sequelize, Sequelize);
db.mesas = require("./mesas.model.js")(sequelize, Sequelize);
db.admins = require("./admin.model.js")(sequelize, Sequelize);

db.clients= require("./clients.model.js")(sequelize, Sequelize);
db.sales = require("./sale.model.js")(sequelize, Sequelize);
db.products = require("./product.model.js")(sequelize, Sequelize);
db.categories = require("./category.model.js")(sequelize, Sequelize);

db.clientes.hasMany(db.reservas)
db.restaurantes.hasMany(db.reservas)
db.reservas.belongsTo(db.clientes)
db.reservas.belongsTo(db.restaurantes)
db.reservas.hasMany(db.mesas)
db.mesas.belongsTo(db.reservas)


db.categories.hasMany(db.products);
db.products.belongsTo(db.categories);

db.clients.hasMany(db.sales);
db.sales.belongsTo(db.clients);
db.products.hasMany(db.sales);
db.sales.belongsTo(db.products);

module.exports = db;
