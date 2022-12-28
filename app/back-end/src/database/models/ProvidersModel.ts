import { DATE } from 'sequelize';
import { STRING } from 'sequelize';
import { Model, INTEGER  } from 'sequelize';
import db from '.';
import Cnpj from './CnpjsModel';

class Providers extends Model {
  id: number;
  name: string;
  tradingName: string;
  cashforceTax: string;
  responsibleName: string;
  responsibleEmail: string;
  responsiblePosition: string;
  responsiblePhone: string;
  responsibleMobile: string;
  website: string;
  postalCode: string;
  address: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  bank: string;
  bankAgency: string;
  account: string;
  documents: string;
  phoneNumber: string;
  situation: string;
  situationDate: string;
  createdAt: string;
  updatedAt: string;
  cnpjId: number;
  email: string;
}
Providers.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  tradingName: {
    type: STRING,
    allowNull: true,
  },
  cashforceTax: {
    type: STRING,
    allowNull: true,
  },
  responsibleName: {
    type: STRING,
    allowNull: true,
  },
  responsibleEmail: {
    type: STRING,
    allowNull: true,
  },
  responsiblePosition: {
    type: STRING,
    allowNull: true,
  },
  responsiblePhone: {
    type: STRING,
    allowNull: true,
  },
  responsibleMobile: {
    type: STRING,
    allowNull: true,
  },
  website: {
    type: STRING,
    allowNull: true,
  },
  postalCode: {
    type: STRING,
    allowNull: true,
  },
  address: {
    type: STRING,
    allowNull: true,
  },
  number: {
    type: STRING,
    allowNull: true,
  },
  complement: {
    type: STRING,
    allowNull: true,
  },
  neighborhood: {
    type: STRING,
    allowNull: true,
  },
  city: {
    type: STRING,
    allowNull: true,
  },
  state: {
    type: STRING,
    allowNull: true,
  },
  bank: {
    type: STRING,
    allowNull: true,
  },
  bankAgency: {
    type: STRING,
    allowNull: true,
  },
  account: {
    type: STRING,
    allowNull: true,
  },
  documents: {
    type: STRING,
    allowNull: true,
  },
  phoneNumber: {
    type: STRING,
    allowNull: true,
  },
  situation: {
    type: STRING,
    allowNull: true,
  },
  situationDate: {
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
    allowNull: false,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
    references: {
      model: 'cnpjs',
      key: 'id',
    }
  },
  email: {
    type: STRING,
    allowNull: true,
  }
}, {
  sequelize: db,
  modelName: 'providers',
  timestamps: false,
});

Providers.hasOne(Cnpj, { foreignKey: 'cnpjId', as: 'cnpjs' });


export default Providers;
