import { DataTypes, Sequelize } from 'sequelize';

const DB_URL = process.env.DATABASE_URL;

if (!DB_URL) {
  throw new Error('DATABASE_URL la variable de entorno no está definida');
}

export const sequelize = new Sequelize(DB_URL);

export const uuidPk = { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true };

export const uuidFk = (table: string, allowNull = false) => ({
  type: DataTypes.UUID,
  allowNull,
  references: { model: table, key: 'id' },
});
