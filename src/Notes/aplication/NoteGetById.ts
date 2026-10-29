import { Notes } from '../domain/Note';
import { NoteRepository } from '../domain/NoteRepository';

export class NoteGetById {
    constructor(private noteRepository: NoteRepository) {}
    async execute(id: number): Promise<Notes | null> {
        return await this.noteRepository.getById(id);
    }
}
