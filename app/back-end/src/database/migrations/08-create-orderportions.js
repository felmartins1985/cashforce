module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orderportions', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nDup:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      dVenc:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      vDup:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      availableToMarket:{
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
        onDelete: 'SET NULL',
      },
    },{
      initialAutoIncrement: 612,
  });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('orderportions');
  },
};