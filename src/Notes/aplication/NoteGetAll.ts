import { Notes } from '../domain/Note';
import { NoteRepository } from '../domain/NoteRepository';

export class NoteGetAll {
    constructor(private noteRepository: NoteRepository) {}
    async execute(): Promise<Notes[]> {
        return await this.noteRepository.getAll();
    }
}
