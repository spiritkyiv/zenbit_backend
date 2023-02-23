import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('ifdteunq', 'ifdteunq', 'ojQaJwr9sfSe-XjwFCimNCldw2to2Hyj', {
  host: 'trumpet.db.elephantsql.com',
  dialect: 'postgres',
});

export class UserMessage extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public text!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

UserMessage.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

sequelize
  .sync()
  .then(() => {
    console.log('Table "UserMessage" created');
  })
  .catch((error) => {
    console.error('Error create error:', error);
  });
