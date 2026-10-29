import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../../Shared/infraestructure/sequelize';
import { User } from '../../domain/User';

export class UserModel extends Model<User> implements User {
    declare id: string;
    declare nombre: string;
    declare correo: string;
}

UserModel.init(
    {
        id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
        nombre: { type: DataTypes.STRING, allowNull: false },
        correo: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {sequelize, tableName: 'Users', timestamps: true}
);
