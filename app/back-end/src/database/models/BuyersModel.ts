import { DATE } from 'sequelize';
import { STRING } from 'sequelize';
import { Model, INTEGER } from 'sequelize';
import db from '.';


class Buyers extends Model {
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
  phoneNumber: string;
  situation: string;
  situationDate: string;
  createdAt: string;
  updatedAt: string;
  cnpjId: number;
  confirm: number;
  email: string;

}
Buyers.init({
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
    },
  },
  confirm: {
    type: INTEGER,
    allowNull: false,
    defaultValue:1,
  },
  email: {
    type: STRING,
    allowNull: true,
  }
}, {
  sequelize: db,
  modelName: 'buyers',
  timestamps: false,
});

export default Buyers;
