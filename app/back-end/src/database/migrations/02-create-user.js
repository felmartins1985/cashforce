module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phoneNumber:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      mobile:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      departament:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      verificationCode:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      emailChecked:{
        type: Sequelize.TINYINT(1),
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
      cashforceAdm:{
        type: Sequelize.TINYINT(1),
        allowNull: false,
      }
    },{
      initialAutoIncrement: 122,
  });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};