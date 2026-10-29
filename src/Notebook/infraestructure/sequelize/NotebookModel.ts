import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../../Shared/infraestructure/sequelize';
import { Notebook } from '../../domain/Notebook';

export class NotebookModel extends Model<
    Notebook,
    Omit<Notebook, 'id'> & { id?: number }
> implements Notebook {
    declare id: number;
    declare nombre: string;
    declare propietarioId: string;
}

NotebookModel.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        nombre: { type: DataTypes.STRING, allowNull: false },
        propietarioId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: { model: 'Users', key: 'id' },
            onDelete: 'CASCADE',
        },
    },
    { sequelize, tableName: 'Notebooks', timestamps: true }
);
