import { STRING } from 'sequelize';
import { Model, INTEGER, DATE } from 'sequelize';
import db from '.';
import Orders from './OrdersModel';


class OrderPortions extends Model {
  id: number;
  nDup: string;
  dVenc: string;
  vDup: string;
  availableToMarket: number;
  createdAt: string;
  updatedAt: string;
  orderId: number;
}
OrderPortions.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nDup: {
    type: STRING,
    allowNull: false,
  },
  dVenc: {
    type: STRING,
    allowNull: false,
  },
  vDup: {
    type: STRING,
    allowNull: false,
  },
  availableToMarket: {
    type: INTEGER,
    allowNull: false,
    defaultValue:1
  },
  createdAt: {
    type: DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DATE,
    allowNull: false,
  },
  orderId: {
    type: INTEGER,
    allowNull: true,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
    references: {
      model: 'orders',
      key: 'id',
    }
  },

}, {
  sequelize: db,
  modelName: 'orderportions',
  timestamps: false,
});

OrderPortions.hasOne(Orders, { foreignKey: 'orderId', as: 'orders' });



export default OrderPortions;
