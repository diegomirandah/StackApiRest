module.exports = (sequelize, Sequelize) => {
    const Admins = sequelize.define("admin", {
        rut:{ 
            unique: true,
            type :Sequelize.INTEGER,
            allowNull: false
        },
          password: {
            type : Sequelize.STRING,
            allowNull: false
        },
          num_local:{ 
            type :Sequelize.INTEGER,
            allowNull: false
        }
      
        }
    );
    return Admins;
  };
  
'use strict';

