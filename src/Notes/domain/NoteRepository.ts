import { Notes } from './Note';

export interface NoteRepository {
    save(note: Notes): Promise<void>;
    getAll(): Promise<Notes[]>;
    getById(id: number): Promise<Notes | null>;
    deleteById(id: number): Promise<void>;
    edit(note: Notes): Promise<void>;
}
