import { STRING } from 'sequelize';
import { Model, INTEGER, DATE } from 'sequelize';
import db from '.';

class Cnpj extends Model {
  id: number;
  cnpj: string;
  companyType: string;
  createdAt: string;
  updatedAt: string;
}
Cnpj.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  cnpj: {
    type: STRING,
    allowNull: false,
  },
  companyType: {
    type: STRING,
    allowNull: false,
  },
  createdAt: {
    type: DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DATE,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'cnpjs',
  timestamps: false,
});

export default Cnpj;
