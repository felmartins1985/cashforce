module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('offers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      tax:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      tariff:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      adValorem:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      float:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      iof:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      expiresIn:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      paymentStatusSponsor:{
        type: Sequelize.TINYINT(1),
        allowNull: false,
      },
      paymentStatusProvider:{
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
      orderId:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'orders',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onCascade: 'CASCADE',
      },
      sponsorId:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'sponsors',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },{
        initialAutoIncrement: 40,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('offers');
  },
};