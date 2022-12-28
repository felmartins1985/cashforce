import { DATE } from 'sequelize';
import { STRING } from 'sequelize';
import { Model, INTEGER  } from 'sequelize';
import db from '.';
import Cnpjs from './CnpjsModel';
import Users from './UsersModel';
import Buyers from './BuyersModel';
import Providers from './ProvidersModel';

class Orders extends Model {
  id: number;
  orderNfId: string;
  orderNumber: string;
  orderPath: string;
  orderFileName: string;
  orderOriginalName: string;
  emissionDate: string;
  pdfFile: string;
  emitedTo: string;
  nNf: string;
  CTE: string;
  value: string;
  createdAt: string;
  updatedAt: string;
  cnpjId: number;
  userId: number;
  buyerId: number;
  providerId: number;
  orderStatusBuyer: string;
  orderStatusProvider: string;
  deliveryReceipt: string;
  cargoPackingList: string;
  deliveryCtrc: string;
}
Orders.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  orderNfId: {
    type: STRING,
    allowNull: false,
  },
  orderNumber: {
    type: STRING,
    allowNull: false,
  },
  orderPath: {
    type: STRING,
    allowNull: true,
  },
  orderFileName: {
    type: STRING,
    allowNull: true,
  },
  orderOriginalName: {
    type: STRING,
    allowNull: true,
  },
  emissionDate: {
    type: STRING,
    allowNull: true,
  },
  pdfFile: {
    type: STRING,
    allowNull: true,
  },
  emitedTo: {
    type: STRING,
    allowNull: false,
  },
  nNf: {
    type: STRING,
    allowNull: true,
  },
  CTE: {
    type: STRING,
    allowNull: true,
  },
  value: {
    type: STRING,
    allowNull: true,
  },
  createdAt: {
    type: DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DATE,
    allowNull: false,
  },
  cnpjId: {
    type: INTEGER,
    allowNull: true,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
    references: {
      model: 'cnpjs',
      key: 'id',
    }
  },
  userId: {
    type: INTEGER,
    allowNull: true,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
    references: {
      model: 'users',
      key: 'id',
    }
  },
  buyerId: {
    type: INTEGER,
    allowNull: true,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
    references: {
      model: 'buyers',
      key: 'id',  
    }
  },
  providerId:{
    type: INTEGER,
    allowNull: true,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
    references: {
      model: 'providers',
      key: 'id',
    }
  },
  orderStatusBuyer: {
    type: STRING,
    allowNull: false,
    defaultValue: '0',
  },
  orderStatusProvider: {
    type: STRING,
    allowNull: false,
    defaultValue: '0',
  },
  deliveryReceipt: {
    type: STRING,
    allowNull: true,
  },
  cargoPackingList: {
    type: STRING,
    allowNull: true,
  },
  deliveryCtrc: {
    type: STRING,
    allowNull: true,
  }
},  {
  sequelize: db,
  modelName: 'orders',
  timestamps: false,
});

Orders.hasOne(Cnpjs, { foreignKey: 'cnpjId', as: 'cnpjs' });
Orders.hasOne(Users, { foreignKey: 'userId', as: 'users' });
Orders.belongsTo(Buyers, { foreignKey: 'buyerId', as: 'buyers' });
Orders.belongsTo(Providers, { foreignKey: 'providerId', as: 'providers' });

export default Orders;
