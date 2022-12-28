import { DATE } from 'sequelize';
import { STRING } from 'sequelize';
import { Model, INTEGER } from 'sequelize';
import db from '.';

class Users extends Model {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  mobile: string;
  departament: string;
  verificationCode: string;
  emailChecked: number;
  createdAt: string;
  updatedAt: string;
  cashforceAdm: number;
}
Users.init({
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
  email: {
    type: STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: STRING,
    allowNull: true,
  },
  mobile: {
    type: STRING,
    allowNull: true,
  },
  departament: {
    type: STRING,
    allowNull: true,
  },
  verificationCode: {
    type: STRING,
    allowNull: true,
  },
  emailChecked: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  createdAt: {
    type: DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DATE,
    allowNull: false,
  },
  cashforceAdm: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: true,
});


export default Users;
