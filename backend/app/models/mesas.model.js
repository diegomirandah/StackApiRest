module.exports = (sequelize, Sequelize) => {
    const Mesas = sequelize.define("mesas", {
        ambiente: {
            type : Sequelize.STRING,
            allowNull: false
        },
          cant_mesa_reserva:{ 
            type :Sequelize.INTEGER,
            allowNull: false
        }
      
        }
    );
    return Mesas;
  };



