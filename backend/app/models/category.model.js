module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
      name: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      }
    });
    return Category;
  };
  