module.exports = (sequelize, Sequelize) => {
    const Reservas = sequelize.define("reservas", {
        fecha: {
            type: Sequelize.DATE,
            allowNull: false
          },
      
          cant_persona: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          disp: {
            type: Sequelize.INTEGER,
            allowNull: false
          }
      
        }
    );
    return Reservas;
  };
  