import { STRING } from 'sequelize';
import { Model, INTEGER, DATE } from 'sequelize';
import db from '.';
import Orders from './OrdersModel';
import Sponsors from './SponsorsModel';

class Offers extends Model {
  id: number;
  tax: string;
  tariff: string;
  adValorem: string;
  float: string;
  iof: string;
  expiresIn: string;
  paymentStatusSponsor: number;
  paymentStatusProvider: number;
  createdAt: string;
  updatedAt: string;
  orderId: number;
  sponsorId: number;
}
Offers.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  tax: {
    type: STRING,
    allowNull: false,
  },
  tariff: {
    type: STRING,
    allowNull: false,
  },
  adValorem: {
    type: STRING,
    allowNull: false,
  },
  float: {
    type: STRING,
    allowNull: false,
  },
  iof: {
    type: STRING,
    allowNull: false,
  },
  expiresIn: {
    type: DATE,
    allowNull: false,
  },
  paymentStatusSponsor: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  paymentStatusProvider: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0,
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
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    references: {
      model: 'orders',
      key: 'id',
    }
  },
  sponsorId: {
    type: INTEGER,
    allowNull: true,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
    references: {
      model: 'sponsors',
      key: 'id',
    }
  }
}, {
  sequelize: db,
  modelName: 'offers',
  timestamps: false,
});

Offers.hasOne(Orders, { foreignKey: 'orderId', as: 'orders' });
Offers.hasOne(Sponsors, { foreignKey: 'sponsorId', as: 'sponsors' });


export default Offers;
