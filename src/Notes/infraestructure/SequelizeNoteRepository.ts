import { Notes } from '../domain/Note';
import { NoteModel } from './sequelize/NoteModel';
import { NoteRepository } from '../domain/NoteRepository';

export class SequelizeNoteRepository implements NoteRepository {
    async save(note: Notes): Promise<void> {
        const { id, ...attributes } = note;
        await NoteModel.create(attributes);
    }

    async getAll(): Promise<Notes[]> {
        const notes = await NoteModel.findAll();
        return notes.map(note => note.toJSON() as Notes);
    }

    async getById(id: number): Promise<Notes | null> {
        const note = await NoteModel.findByPk(id);
        return note ? (note.toJSON() as Notes) : null;
    }

    async deleteById(id: number): Promise<void> {
        await NoteModel.destroy({ where: { id } });
    }

    async edit(note: Notes): Promise<void> {
        const { id, creadoEl, ...attributes } = note;
        await NoteModel.update(attributes, { where: { id } });
    }
}
