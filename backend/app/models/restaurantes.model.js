module.exports = (sequelize, Sequelize) => {
    const Restaurantes = sequelize.define("restaurantes", {
        cant_mesas: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
      
          direccion: {
            type: Sequelize.STRING,
            allowNull: false
          },

      
        }
    );
    return Restaurantes;
  };