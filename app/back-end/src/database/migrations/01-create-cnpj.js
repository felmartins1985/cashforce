module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cnpjs', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      companyType:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: false,
      },
    },{
      initialAutoIncrement: 437,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('cnpjs');
  },
};