module.exports = {
    HOST: "localhost",
    USER: "root",
    DB: "restaurante",
    dialect: "mysql",
    pool: {
      max: 20,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  