import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../../Shared/infraestructure/sequelize';
import { Notes } from '../../domain/Note';

export class NoteModel extends Model<
    Notes,
    Omit<Notes, 'id' | 'creadoEl'> & { id?: number; creadoEl?: Date }
> implements Notes {
    declare id: number;
    declare titulo: string;
    declare contenido: string;
    declare autorId: string;
    declare libroId: number;
    declare creadoEl: Date;
}

NoteModel.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        titulo: { type: DataTypes.STRING, allowNull: false },
        contenido: { type: DataTypes.TEXT, allowNull: false },
        autorId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: { model: 'Users', key: 'id' },
            onDelete: 'CASCADE',
        },
        libroId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: 'Notebooks', key: 'id' },
            onDelete: 'CASCADE',
        },
        creadoEl: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    },
    { sequelize, tableName: 'Notes', timestamps: false }
);
