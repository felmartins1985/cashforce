module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      orderNfId:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderNumber:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderPath:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      orderFileName:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      orderOriginalName:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      emissionDate:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      pdfFile:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      emitedTo:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      nNf:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      CTE:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      value:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      cnpjId:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'cnpjs',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      buyerId:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'buyers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      providerId:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'providers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      orderStatusBuyer:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderStatusProvider:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      deliveryReceipt:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      cargoPackingList:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      deliveryCtrc:{
        type: Sequelize.STRING,
        allowNull: true,
      }
    },{
      initialAutoIncrement: 540,
  });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('orders');
  },
};