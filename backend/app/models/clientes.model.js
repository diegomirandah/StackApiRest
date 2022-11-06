module.exports = (sequelize, Sequelize) => {
    const Clientes = sequelize.define("clientes", {
      rut:{ 
        unique: true,
        type :Sequelize.INTEGER,
        allowNull: false
    },
      password: {
        type : Sequelize.STRING,
        allowNull: false
    },
      correo:{ 
        unique: true,
        type :Sequelize.STRING,
        allowNull: false
    },
      nombre:{ 
      type :Sequelize.STRING,
      allowNull: false
    },
      telefono:{ 
      type :Sequelize.INTEGER,
      allowNull: false
    }
    });
    return Clientes;
  };
  