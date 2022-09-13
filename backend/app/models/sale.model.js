module.exports = (sequelize, Sequelize) => {
    const Sale = sequelize.define("sale", {
      number: {
        type: Sequelize.INTEGER
      }
    });
    return Sale;
  };
  